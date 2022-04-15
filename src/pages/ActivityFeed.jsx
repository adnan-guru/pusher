import React, { useState } from "react";
import { styles } from "./styles";
import socketClient from "socket.io-client";
import moment from "moment";

function ActivityFeed() {
  const clearFeed = () => {
    setTimeout(() => {
      setFeed([]);
    }, 3000);
  };
  const [feed, setFeed] = useState([]);
  const SERVER = "http://127.0.0.1:4000";

  React.useEffect(() => {
    var socket = socketClient(SERVER);
    socket.on("FEED_CREATED", (data) => {
      setFeed([...feed, data.message]);
      clearFeed();
    });
    socket.on("FEED_UPDATED", (data) => {
      setFeed([...feed, data.message]);
      clearFeed();
    });
    socket.on("FEED_DELETED", (data) => {
      setFeed([...feed, data.message]);
      clearFeed();
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.headerText}>Pusher</span>
        <span style={styles.loginView}>Create Free Account</span>
      </div>
      <div style={styles.content}>
        <span style={styles.heading}>Realtime Feed with Pusher + React</span>
        <div style={styles.feedList}>
          {feed.map((item) => {
            return (
              <div key={item.id} style={styles.feedItem}>
                <span
                  style={{ ...styles.feedItemText, color: "rgba(0,0,0,0.7)" }}
                >
                  {item.action}:
                </span>
                <span
                  style={{
                    ...styles.feedItemText,
                    fontWeight: "bold",
                  }}
                >
                  {item.id}
                </span>
                <span style={{ ...styles.feedItemText }}>
                  <i>{moment(item.updatedAt).startOf().fromNow()}</i>
                </span>
                <span style={{ ...styles.feedItemText, marginTop: "10px" }}>
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
