import logo from "./logo.svg";
import "./App.css";

function App() {
  const mainData = {
    username: "",
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
  };

  const [formdata, setFormdata] = useState(mainData);
  const [err, setErrs] = useState({});
  const [submit, setSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    console.log(formdata);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrs(validation(formdata));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(err);
    if (Object.keys(err).length === 0 && submit) {
      console.log(formdata);
    }
  }, [err, submit, formdata]);

  const validation = (values) => {
    const errs = {};
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errs.username = "Username is required";
    }

    if (!values.name) {
      errs.name = "Username is required";
    }
    if (!values.email) {
      errs.email = "Email is required";
    } else if (!reg.test(values.email)) {
      errs.email = "Please enter a valid email";
    }

    if (!values.mobile) {
      errs.mobile = "mobile number  is required";
    } else if (values.mobile.length < 10) {
      errs.mobile = "Mobile num must be 10 digits";
    } else if (values.mobile.length > 10) {
      errs.mobile = "Password should not exceed more than 10 characters";
    }

    if (!values.country) {
      errs.country = "country name is required";
    }
    if (!values.city) {
      errs.city = "city name is required";
    }
    if (!values.state) {
      errs.state = "state name is required";
    }

    return errs;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="divideer"></div>
        <div className="form">
          <div className="field">
            <label className="label">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formdata.username}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.username}</p>
          <div className="field">
            <label className="label1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formdata.name}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.name}</p>
          <div className="field">
            <label className="labell">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.email}</p>
          <div className="field">
            <label className="label2">Mobile</label>
            <input
              type="Number"
              name="mobile"
              placeholder="Mobile"
              value={formdata.mobile}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.mobile}</p>
          <div className="field">
            <label className="label3">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formdata.country}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.country}</p>
          <div className="field">
            <label className="label4">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formdata.city}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.city}</p>
          <div className="field">
            <label className="label5">State</label>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={formdata.state}
              onChange={handleChange}
            />
          </div>
          <p className="err">{err.state}</p>
          <button className="fluidbutton">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
