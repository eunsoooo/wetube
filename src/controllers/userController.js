const handleJoin = (req, res) => res.send("Join");

const handleEditUser = (req, res) => res.send("Edit User");

const handleDeleteUser = (req, res) => res.send("Delete User");

export {
  handleJoin,
  handleEditUser,
  handleDeleteUser,
};
