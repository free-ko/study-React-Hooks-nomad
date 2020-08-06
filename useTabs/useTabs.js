export const useTabs = (intialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentIndex: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
