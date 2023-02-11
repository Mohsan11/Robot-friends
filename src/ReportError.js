import { Component } from "react";
class ReportError extends Component {
  constructor(props) {
    super(props);
    this.State = {
      haserror: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ haserror: true });
  }
  render() {
    if (this.State.haserror) {
      return <h1>Oppssss!. Error Appeared</h1>;
    }
    return this.props.children;
  }
}
export default ReportError;
