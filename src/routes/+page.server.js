import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

// Hygraph query
export async function load({ params }) {
  let queryMediaCollege = gql`
    query DetailPage {
      detailPageMediacolleges(first: 100) {
        slug
        spotlight
        spotlightNumber
        title
        subtitle
        date
        description
        image {
          url
          height
          width
        }
        imageTitle
      }
    }
  `;

  let queryOwnProjects = gql`
    query DetailPage {
      detailPageOwnProjectss(first: 100) {
        slug
        spotlight
        spotlightNumber
        title
        subtitle
        date
        description
        image {
          url
          height
          width
        }
        imageTitle
      }
    }
  `;

  const dataMediacollege = await hygraph.request(queryMediaCollege);
  const dataOwnProjects = await hygraph.request(queryOwnProjects);

  return { dataMediacollege, dataOwnProjects };
}
