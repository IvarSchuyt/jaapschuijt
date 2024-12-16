import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

// Hygraph query
export async function load() {
  let query = gql`
    query DetailPage {
      artikels(first: 100) {
        naam
        beschrijving
        foto {
          url
        }
        prijs
      }
    }
  `;

  const data = await hygraph.request(query);

  return data;
}
