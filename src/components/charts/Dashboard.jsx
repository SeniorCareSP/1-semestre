import { Stack, StyledEngineProvider } from "@mui/material";
import ChartGenero from "./ChartGenero";
import ChartAvaliacao from "./ChartAvaliacao";
import SidebarDash from "../sidebar/SidebarDash";
import Style from "./Dashboard.module.css";
import ChartPie from "./ChartPie";
import map from "../../utils/assets/mapa.png"

function EleDashbord() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash />
                <div className={Style["card"]}>
                    <div className={Style["title-dash"]}>
                        <h1>Dashboard</h1>

                    </div>
                    <Stack spacing={3} direction={'row'}>
                        <div className={Style["kpi1"]}>
                            <Stack>
                                <h4>Visitas Hoje</h4>
                                <h1>100</h1>
                            </Stack>
                            <Stack>
                                <p>total de visitas</p>
                            </Stack>
                        </div>
                        <span className={Style["chart-avaliacao"]}>
                            <ChartAvaliacao />
                        </span>

                    </Stack>
                    <Stack direction={'row'}>
                        <Stack>
                            <Stack spacing={3} direction={'row'} className={Style["kpi2"]}>
                                <div>
                                    <h1>3</h1>
                                    <p>Denuncias aguardando analise.</p>
                                </div>
                                <div>
                                    <h1>70</h1>
                                    <p>Documentos aguardando analise.</p>
                                </div>
                            </Stack>
                            <span>
                                <ChartGenero />
                            </span>
                        </Stack>
                        <Stack >
                            <div className={Style["map"]}>
                                <img src={map} alt="" />
                            </div>
                            <span>
                                <ChartPie />
                            </span>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default EleDashbord;