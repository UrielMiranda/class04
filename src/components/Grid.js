import React, { Component } from "react";
import "./Grid.module.less";
const data = [
  { url: "https://i.scdn.co/image/28f4ddb6ede7e1180625fb3276c254aa36660fcb" },
  { url: "https://i.scdn.co/image/a782609947094225dce66e974d9761161553b68f" },
  { url: "https://i.scdn.co/image/171539591cad63ffb1e4217e5320e5c6dc34710a" },
  { url: "https://pl.scdn.co/images/pl/default/eca9acbef112e586d19bd5a0c7d81b0ae1f82355" },
  { url: "https://i.scdn.co/image/08eae5c05d10ca3eb0c87969d408a8808e14cf42" },
  { url: "https://i.scdn.co/image/75bf24eee9756542eaf055a6f7e68e67bcb4ece9" }
];

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }


  render() {
    let data = this.state.data;
    const limit = this.props.limit;
    const start = this.props.start;
    return data ? (
      data.map((item, i) => {
        if (i >= start && i <= limit) {
          return (
            <div className="card" key={i}>
              <img src={item.url} alt="" />
            </div>
          );
        }
      })
    ) : (
      <div>Else</div>
    );
  }
}

export default Grid;
