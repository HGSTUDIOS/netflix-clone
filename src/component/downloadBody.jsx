const DownloadBody = () => {
  return (
    <div>
      <div>
        <p
          style={{
            color: "#fff",
            fontWeight: "lighter",
            fontSize: "15px",
            padding: "20px",
            paddingLeft: "40px",
          }}
        >
          Smart Downloads
        </p>
      </div>

      <div>
        <h5 style={{ color: "#fff", marginLeft: "15px" }}>
          Introducing Downloads For You
        </h5>
        <p
          style={{
            color: "#fff",
            marginLeft: "15px",
            marginRight: "15px",
            fontSize: "11px",
            fontWeight: "lighter",
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere
          laborum incidunt assumenda enim voluptatem veritatis odio dolores esse
          est illo, corporis fugit sequi porro sit perspiciatis eius.
          Recusandae, hic.
        </p>
      </div>

      <div
        style={{
          background: "#2e2e2e",
          margin: "0px auto",
          borderRadius: "50%",
          height: "200px",
          width: "200px",
        }}
      >
        <p style={{ color: "black" }}>.</p>
      </div>
      <div>
        <button
          className="btn btn-primary"
          style={{
            borderRadius: "3px",
            fontWeight: "lighter",
            fontSize: "15px",
            width: "370px",
            border: "none",
            marginTop: "25px",
            margin: "10px",
          }}
        >
          SETUP
        </button>
        <button
          className="btn btn-secondary"
          style={{
            background: "#2e2e2e",
            borderRadius: "3px",
            fontWeight: "bolder",
            fontSize: "15px",
            width: "250px",
            border: "none",
            marginLeft: "70px",
            marginTop: "50px",
          }}
        >
          Find Something to Download
        </button>
      </div>
    </div>
  );
};

export default DownloadBody;
