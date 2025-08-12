import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { ReactNode } from "react";

interface ModalGlobalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  actionText?: string;
  onAction?: () => void;
}

export default function ModalGlobal({
  isOpen,
  onOpenChange,
  title,
  children,
  actionText = "Action",
  onAction,
}: ModalGlobalProps) {
  return (
    <Modal
      backdrop="opaque"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen}
      radius="lg"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={onClose}>
                Close
              </Button>
              {onAction && (
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={() => {
                    onAction();
                    onClose();
                  }}
                >
                  {actionText}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}