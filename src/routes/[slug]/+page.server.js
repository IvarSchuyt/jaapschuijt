import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

// Hygraph query
export async function load({ params }) {
  const { slug } = params;

  let queryMediaCollege = gql`
    query DetailPage($slug: String!) {
      detailPageMediacolleges(where: { slug: $slug }) {
        slug
        title
        subtitle
        date
        description
        image(first: 100) {
          url
          height
          width
        }
        pdf {
          url
          height
          width
        }
        imageTitle
      }
    }
  `;

  let queryOwnProjects = gql`
    query DetailPage($slug: String!) {
      detailPageOwnProjectss(where: { slug: $slug }) {
        slug
        title
        subtitle
        date
        description
        image(first: 100) {
          url
          height
          width
        }
        pdf {
          url
          height
          width
        }
        imageTitle
      }
    }
  `;

  let queryGameArts = gql`
    query DetailPage($slug: String!) {
      detailPageGameArts(where: { slug: $slug }) {
        slug
        title
        subtitle
        date
        description
        image(first: 100) {
          url
          height
          width
        }
        pdf {
          url
          height
          width
        }
        imageTitle
      }
    }
  `;

  const variables = { slug };
  const dataMediacollege = await hygraph.request(queryMediaCollege, variables);
  const dataOwnProjects = await hygraph.request(queryOwnProjects, variables);
  const dataGameArt = await hygraph.request(queryGameArts, variables);
  return { dataMediacollege, dataOwnProjects, dataGameArt };
}
