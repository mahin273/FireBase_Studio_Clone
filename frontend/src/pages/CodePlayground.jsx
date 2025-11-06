import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorTab } from "../components/atoms/EditorTab/EditorTab";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEffect } from "react";

export const CodePlayground = () => {
  const { projectId: projectIdFromUrl } = useParams();
  const { setProjectId, projectId } = useTreeStructureStore();

  useEffect(() => {
    setProjectId(projectIdFromUrl);
  }, [projectIdFromUrl, setProjectId]);

  return (
    <div className="flex h-screen bg-[#1a1b26] text-gray-200">
      {/* Left Sidebar: Tree */}
      <div className="w-64 bg-[#011626] border-r border-gray-700 p-2 overflow-y-auto">
        {projectId && <TreeStructure />}
      </div>

      {/* Right Side: Editor and Tabs */}
      <div className="flex-1 flex flex-col">
        {/* Editor Tabs */}
        <div className="flex border-b border-gray-700 bg-[#011626]">
          <EditorTab isActive={true} />
          <EditorTab isActive={false} />
        </div>

        {/* Editor */}
        <div className="flex-1">
          <EditorComponent />
        </div>
      </div>
    </div>
  );
};
