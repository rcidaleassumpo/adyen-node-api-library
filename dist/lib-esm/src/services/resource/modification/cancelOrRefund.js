var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Client from "../../../client";
import Resource from "../../resource";
var CancelOrRefund = (function (_super) {
    __extends(CancelOrRefund, _super);
    function CancelOrRefund(service) {
        return _super.call(this, service, service.client.config.endpoint + "/pal/servlet/Payment/" + Client.API_VERSION + "/cancelOrRefund") || this;
    }
    return CancelOrRefund;
}(Resource));
export default CancelOrRefund;
//# sourceMappingURL=cancelOrRefund.js.map