function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form>

        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <br />

        <button>Register</button>

      </form>
    </div>
  );
}

export default Register;