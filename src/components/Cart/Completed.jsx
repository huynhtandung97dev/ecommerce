export default function Completed() {
    return (
        <div className="container d-flex justify-content-center" style={{ padding: "20px 50px" }}>
            <div className="d-flex flex-column border justify-content-center col-md-10 text-center p-3">
                <i class="fa-solid fa-circle-check" style={{ fontSize: 65, color: "#00BBA6" }}></i>
                <span style={{ fontWeight: 700, fontSize: 20, color: "#333333" }} className="mt-3">
                    Đặt hàng thành công
                </span>
                <span style={{ fontWeight: 500, fontSize: 20, color: "##111111" }} className="m-3">
                    Cảm ơn quý khách đã thuê đồ tại Beauty Outfits
                </span>
                <div className="d-flex justify-content-center" style={{ gap: 10 }}>
                    <button
                        className="btn btn-success col-3"
                        style={{ backgroundColor: "#00BBA6", color: "#ffffff", fontWeight: 700, fontSize: 16 }}
                    >
                        Quay về trang chủ
                    </button>
                    <button
                        style={{ backgroundColor: "#00BBA6", color: "#ffffff", fontWeight: 700, fontSize: 16 }}
                        className="btn btn-success col-3"
                    >
                        Xem đơn hàng
                    </button>
                </div>
            </div>
        </div>
    );
}