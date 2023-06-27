import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.circle} />
      <View style={styles.itemContent}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

interface TimelineProps {
  data: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const renderTimelineItems = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.itemWrapper}>
        <TimelineItem {...item} />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        <View style={styles.verticalLine} />
        {renderTimelineItems()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#000",
  },
  timelineContainer: {
    position: "relative",
  },
  itemWrapper: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  verticalLine: {
    position: "absolute",
    left: 4,
    top: 0,
    width: 1,
    height: "100%",
    backgroundColor: "#aaa",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#dcc87a",
    marginRight: 12,
    alignSelf: "flex-start",
    zIndex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  itemContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 12,
  },
  time: {
    fontSize: 16,
    fontFamily: "secondary",
    marginBottom: 8,
    color: "#dcc87a",
  },
  title: {
    fontSize: 22,
    fontFamily: "primary",
    marginBottom: 8,
    color: "#dcc87a",
  },
  description: {
    fontSize: 14,
    fontFamily: "secondary",
    color: "#aaa",
  },
});

export default Timeline;
