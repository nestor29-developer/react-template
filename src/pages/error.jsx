import React from "react";
import Stack from "../sdk/entry";
import Layout from "../components/layout";

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: undefined,
      footer: undefined,
    };
  }

  async componentDidMount() {
    try {
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
        header: header[0][0],
        footer: footer[0][0],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { header, footer } = this.state;
    if (header && footer) {
      return (
        <Layout header={header} footer={footer}>
          <div className="error-page">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </Layout>
      );
    }

    return "";
  }
}
