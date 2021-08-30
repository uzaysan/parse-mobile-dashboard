import request from './BaseApi';

export default Schema = {
  async getAllSchema() {
    try {
      return await request.GET('schemas', {}, {});
    } catch (err) {
      return {error: err};
    }
  },
};
