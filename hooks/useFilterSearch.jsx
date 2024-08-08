export default function useFilterSearch() {
  const filterItems = (allItems, value) => {
    const lowerCaseSearch = value.toLowerCase();
    const items = allItems.filter((item) =>
      item.label.toLowerCase().includes(lowerCaseSearch),
    );

    return items;
  };

  return { filterItems };
}
