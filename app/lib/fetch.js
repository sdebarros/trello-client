import fetch from "ember-network/fetch";

export default function() {
  return fetch(...arguments).then(response => {
    return response.json();
  });
}
