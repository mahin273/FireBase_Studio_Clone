import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Card, Typography, Space, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();
  const navigate=useNavigate();

  async function handleCreateProject() {
    try {
     const response = await createProjectMutation();
      message.success("Project created successfully!");
      console.log("Redirect to the editor");
      navigate(`/project/${response.data}`)

    } catch (error) {
      message.error("Error creating project");
      console.error(error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f7fa",
      }}
    >
      <Card
        style={{
          width: 400,
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: 16,
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={4} style={{ marginBottom: 0 }}>
            Create a New Project
          </Title>
          <Text type="secondary">
            Start from scratch or import existing configurations.
          </Text>

          <Button
            type="primary"
            icon={isPending ? <LoadingOutlined /> : <PlusOutlined />}
            size="large"
            loading={isPending}
            onClick={handleCreateProject}
            style={{
              borderRadius: 8,
              fontWeight: 500,
              letterSpacing: 0.3,
            }}
          >
            {isPending ? "Creating..." : "Create Project"}
          </Button>
        </Space>
      </Card>
    </div>
  );
};
   