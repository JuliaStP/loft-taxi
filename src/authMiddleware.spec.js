import { authMiddleware } from "./authMiddleware";
import { authenticate,signUp } from "./actions";
import { serverLogin, serverSignup } from "./api";

jest.mock('./api', () => ({ 
  serverLogin: jest.fn(() => true),
  serverSignup: jest.fn(() => true)
}));

describe('authMiddleware', () => {
  describe('#AUTHENTICATE', () => {
    it('api auth', async () => {
      serverLogin.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        authenticate('testlogin', 'testpassword')
      );

      expect(serverLogin).toBeCalledWith('testlogin', 'testpassword');
      expect(dispatch).toBeCalledWith({ type: 'LOG_IN' });
    });
  });

  describe('#CHECKIN', () => {
    it('api auth', async () => {
      serverSignup.mockImplementation(async () => true);
      const dispatch = jest.fn();

      await authMiddleware({ dispatch })()(
        signUp('testlogin', 'testfirstname', 'testlastname', 'testpassword')
      );

      expect(serverSignup).toBeCalledWith('testlogin', 'testfirstname', 'testlastname', 'testpassword');
      expect(dispatch).toBeCalledWith({ type: 'LOG_IN' });
    });
  });
});