import React, { Component } from "react"

const App = () => {
  return <div>
    <ul>
      <li>WTF</li>
      <li>
        <h2>Short-lived connections</h2>
        <p>
Đây là loại kết nối được HTTP phiên bản đầu tiên sử dụng (1.0). Mỗi một HTTP request sẽ được hoàn thành trên chính kết nối của riêng nó, có nghĩa là quá trình bắt tay 3 bước (TCP three-hand-shaking) phải được thiết lập trước khi request.

Tuy nhiên cách này sẽ không tối ưu được thời gian, ví dụ ta có 3 request thì TCP phải thiết lập three-hand-shaking cho mỗi request riêng biệt, chưa kể nếu có lớp bảo mật như TLS thì sẽ càng làm tăng độ trễ của kết nối.</p>
      </li>
    </ul>
    <div className="container">
      <div className="row">
        <div className="col-sm">
          One of three columns
        </div>
        <div className="col-sm">
          One of three columns
        </div>
        <div className="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  </div>;
}

export default App