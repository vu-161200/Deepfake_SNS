class BaseController {
  create = (req, rep) => {
    rep.send("create");
  };

  getById = (req, rep) => {
    // userService.getById(req.params.id);
    rep.send(`get by id ${req.params.id}`);
  };

  update = (req, rep) => {
    rep.send("update");
  };

  delete = (req, rep) => {
    rep.send("delete");
  };
}

export default BaseController;
