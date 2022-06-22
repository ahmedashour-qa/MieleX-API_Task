import * as POSTUser from '../requests/POST.User.request';
import * as DELETEUser from '../requests/DELETE.User.request'

let user;

describe('DELETE USER', () => {
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
        user = object;
    });
  });

  it('Remove a user', () => {
    POSTUser.createUser(user).then(responseUser => {

      DELETEUser.deleteUser(responseUser.body.id).should(responseDeleteUser => {
        expect(responseDeleteUser.status).to.eq(204);
      });
    });
  });
});