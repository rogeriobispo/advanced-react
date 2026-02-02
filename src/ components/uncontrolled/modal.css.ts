import { style } from "@vanilla-extract/css"

const ContainerModal = style({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
})


const ModalBox = style({
  width: "500px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  position: "relative",
})


export { ContainerModal, ModalBox }
