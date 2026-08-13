import { categories, groups } from "../data/songs";

export function useCategory(categoryId) {
  const category = categories.find((c) => c.id === categoryId);
  const groupsInCategory = groups.filter((g) => g.categoryId === categoryId);
  return { category, groups: groupsInCategory };
}