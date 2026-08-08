interface NavLinksType {
  id: number;
  path: string;
  name: string;
}

export const navItems: NavLinksType[] = [
  { id: 1, path: "/", name: "Get" },
  { id: 2, path: "/sendPost", name: "Post" },
  { id: 3, path: "/updatePost", name: "Put" },
  { id: 4, path: "/deletePost", name: "Delete" },
];
