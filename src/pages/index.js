import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Card, View} from "wasabi-kit";
import ReactMarkdown from 'react-markdown'

const dimensions = {
  xs: { w: 310, h: 240 },
  sm: { w: 385, h: 285 },
  md: { w: 385, h: 285 },
  lg: { w: 385, h: 285 }
};

class Index extends React.Component {
  render() {
    const {
      data: { stashes },
    } = this.props;
    return(
      <Layout>
        <SEO title="Home" />
        <h1>My Stashes</h1>
          {stashes.edges.map(stash =>
            <Card
              color="purewhite"
              key={stash.node.id}
              dimensions={dimensions}
              style={{ height: 0 }}
            >
              <ReactMarkdown
                source={stash.node.data.title.html}
                escapeHtml={false}
              />
              <ReactMarkdown
                source={stash.node.data.source.html}
                escapeHtml={false}
              />
              <ReactMarkdown
                source={stash.node.data.content.html}
                escapeHtml={false}
              />
              <View justify="center" round={5} width={50} type="rice">
                {stash.node.tags}
              </View>
            </Card>
          )}
      </Layout>
    );
  }
}

export const stashQuery = graphql`
  query IndexQuery {
    stashes: allPrismicStash {
        edges {
          node {
            data {
              content {
                html
              }
              title {
                html
              }
              source {
                html
              }
            }
            id
            tags
          }
        }
      }
  }`;

export default Index;
