import React, { useRef, memo } from "react";
import { styles } from "./styles";
import socketClient from "socket.io-client";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

function ActivityFeed() {
  const SERVER = "localhost:4000";
  const feeds = useSelector((state) => state.feeds);
  const dispatch = useDispatch();

  const socketClientRef = useRef();

  const clearFeed = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_FEEDS" });
    }, 6000);
  };
  const addFeed = (feed) => {
    dispatch({ type: "ADD_FEEDS", payload: feed });
    clearFeed();
  };
  React.useEffect(() => {
    var socket = socketClient(SERVER);
    socket.on("FEED_CREATED", (data) => {
      addFeed(data.message);
    });
    socket.on("FEED_UPDATED", (data) => {
      addFeed(data.message);
    });
    socket.on("FEED_DELETED", (data) => {
      addFeed(data.message);
    });
    socketClientRef.current = socket;
    return () => {
      socket.removeAllListeners();
    };
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
          {feeds?.reverse()?.map((item, index) => {
            return (
              <div
                className="feed-list"
                key={item.id}
                style={{
                  ...styles.feedItem,
                  borderTop: index > 0 ? "1px solid white" : "none",
                }}
              >
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

export default memo(ActivityFeed);
