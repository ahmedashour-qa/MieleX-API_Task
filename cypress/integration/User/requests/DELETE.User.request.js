/// <reference types="cypress" />

function deleteUser(Userid) {
  // cy.request - client http
  return cy.request({
    method: 'DELETE',
    url: `/users/${Userid}`,
    failOnStatusCode: false
  });
};

export { deleteUser };