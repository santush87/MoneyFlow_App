import { data } from "autoprefixer";
import { request } from "../axios_helper.js";

export default class AuthContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    request("GET", {}).then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    <div>
      {this.state.data && this.state.data.map((item) => <p>{item}</p>)}
    </div>;
  }
}
