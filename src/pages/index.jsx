import React from "react";
import Stack from "../sdk/entry";

import Layout from "../components/layout";
import RenderComponenets from "../components/render-components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: undefined,
      header: undefined,
      footer: undefined,
      error: { errorStatus: false, errorCode: undefined, errorData: undefined },
    };
  }

  async componentDidMount() {
    try {
      const result = await Stack.getEntryByUrl({
        contentTypeUid: "page",
        entryUrl: this.props.location.pathname,
        referenceFieldPath: ["page_components.from_blog.featured_blogs"],
        jsonRtePath: [
          "page_components.from_blog.featured_blogs.body",
          "page_components.section_with_buckets.buckets.description",
        ],
      });
      const header = await Stack.getEntry({
        contentTypeUid: "header",
        referenceFieldPath: ["navigation_menu.page_reference"],
        jsonRtePath: ["notification_bar.announcement_text"],
      });
      const footer = await Stack.getEntry({
        contentTypeUid: "footer",
        jsonRtePath: ["copyright"],
      });
      this.setState({
        entry: result[0],
        header: header[0][0],
        footer: footer[0][0],
        error: { errorStatus: false },
      });
    } catch (error) {
      this.setState({
        error: { errorStatus: true, errorCode: 404, errorData: error },
      });
    }
  }

  render() {
    const { header, footer, entry, error } = this.state;
    const { history } = this.props;
    if (!error.errorStatus && entry) {
      return (
        <Layout header={header} footer={footer} page={entry} activeTab="Home">
          <RenderComponenets
            pageComponents={entry.page_components}
            contentTypeUid="page"
            entryUid={entry.uid}
            locale={entry.locale}
          />
        </Layout>
      );
    }

    if (error.errorStatus) {
      history.push("/error", [error]);
    }
    return "";
  }
}
export default Home;
