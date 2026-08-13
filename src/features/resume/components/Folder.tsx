import { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const tree = [
  {
    name: "src",
    children: [
      { name: "App.jsx", file: true },
      { name: "main.jsx", file: true },
      {
        name: "components",
        children: [
          { name: "Sidebar.jsx", file: true },
          { name: "FolderTree.jsx", file: true },
        ],
      },
    ],
  },
  {
    name: "public",
    children: [{ name: "favicon.ico", file: true }],
  },
];

function TreeNode({ node }) {
  const [open, setOpen] = useState(true);

  if (node.file) {
    return (
      <div className="flex items-center gap-2 py-1 pl-6 text-sm text-gray-300 hover:bg-gray-700 rounded cursor-pointer">
        <FileText size={16} />
        {node.name}
      </div>
    );
  }

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 py-1 px-2 text-sm text-white hover:bg-gray-700 rounded cursor-pointer"
      >
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        {open ? <FolderOpen size={16} /> : <Folder size={16} />}
        {node.name}
      </div>

      {open && (
        <div className="ml-4">
          {node.children?.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RightFolderPanel() {
  return (
    <div className="fixed right-0 top-0 h-screen w-72 bg-gray-900 border-l border-gray-700 p-3 overflow-y-auto">
      <h2 className="text-white font-semibold mb-3">Explorer</h2>

      {tree.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
}
