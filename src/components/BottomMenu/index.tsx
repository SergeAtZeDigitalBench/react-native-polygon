import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./BottomMenu.style";

import type { Todo } from "@/types";

import { getStats } from "@/lib";

const TABS = [
  { id: "all", title: "All" },
  { id: "inProgress", title: "In progress" },
  { id: "completed", title: "Done" },
] as const;

interface IProps {
  selectedTab: "all" | "inProgress" | "completed";
  handleSelect: (tabId: "all" | "inProgress" | "completed") => void;
  todoList: Todo[];
}

export const BottomMenu = ({
  selectedTab,
  handleSelect,
  todoList,
}: IProps): JSX.Element => {
  const stats = getStats(todoList);

  const renderTabs = () =>
    TABS.map(({ id, title }) => {
      const isSelected = selectedTab === id;
      const amount = stats[id];

      return (
        <TouchableOpacity
          key={id}
          onPress={() => {
            handleSelect(id);
          }}
        >
          <Text
            style={[s.tabText, { color: isSelected ? "#2f76e5" : "black" }]}
          >
            {`${title} (${amount})`}
          </Text>
        </TouchableOpacity>
      );
    });

  return <View style={s.root}>{renderTabs()}</View>;
};
