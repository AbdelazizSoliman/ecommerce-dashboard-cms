"use client";

import { Modal } from "@/components/ui/modal";
// import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="h-screen p-4">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Modal title="Test" description="test disc" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetupPage;
