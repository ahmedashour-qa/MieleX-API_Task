import * as GETUser from '../requests/GET.User.request';

describe('GET USER', () => {
  it('GET Single Users Data by ID', () => {
    const UserId =1
    GETUser.Userdata(UserId).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.statusText).to.eq('OK')
      expect(response.body.data).to.be.not.null
      expect(response.body.data.id).to.eq(UserId)
      
    });
  });
});