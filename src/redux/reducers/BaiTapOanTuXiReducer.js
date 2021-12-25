



const stateDefault = {
    mangDatCuoc : [
        {ma:"keo", hinhAnh:"./img/BaiTapOanTuXi/keo.png", datCuoc:true},
        {ma:"bua", hinhAnh:"./img/BaiTapOanTuXi/bua.png", datCuoc:false},
        {ma:"bao", hinhAnh:"./img/BaiTapOanTuXi/bao.png", datCuoc:false},
    ],
    ketQua:" I'm Iron man , i love you 3000 !!! ",
    soLanThang:0,
    soLanChoi:0,
    computer:{ma:"bua",hinhAnh:"./img/BaiTapOanTuXi/bua.png", datCuoc:true}
}

const BaiTapOanTuXiReducer = (state=stateDefault, action) => {
    switch(action.type) {
        case "KEO_BUA_BAO" :{
            let mangCuocUpdate = [...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true};
                }
                return {...item,datCuoc:false};
            })

            // let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc)
            // if(index !== -1) {
            //     mangCuocUpdate[index].datCuoc = true;
            // }
            state.mangDatCuoc = mangCuocUpdate ;
            return {...state}
        }
        case "RAN_DOM" :{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien
            return {...state}
        }
        case "RESULT_GAME" : {
            let player = state.mangDatCuoc.find(item=>item.datCuoc === true);
            let computer = state.computer;
            switch(player.ma){
                case "keo" :
                    if(computer.ma === "keo"){
                        state.ketQua = " Hòa nhau !!!"                       
                    } else if(computer.ma === "bua"){
                        state.ketQua = " Thua sml !!! "                     
                    } else {
                        state.ketQua = " I'm Iron man , i love you 3000 !!! "                      
                        state.soLanThang+=1
                    }
                    break;
                case "bua" :
                    if(computer.ma === "bua"){
                        state.ketQua = " Hòa nhau !!!"                       
                    } else if(computer.ma === "bao"){
                        state.ketQua = " Thua sml !!! "                      
                    } else {
                        state.ketQua = " I'm Iron man , i love you 3000 !!! "                       
                        state.soLanThang+=1
                    }
                    break;
                case "bao" :
                    if(computer.ma === "bao"){
                        state.ketQua = " Hòa nhau !!!"                        
                    } else if(computer.ma === "keo"){
                        state.ketQua = " Thua sml !!! "                       
                    } else {
                        state.ketQua = " I'm Iron man , i love you 3000 !!! "
                        state.soLanThang+=1
                    }
                    break;  
                default : state.ketQua = " I'm Iron man , i love you 3000 !!! " 
            }
            state.soLanChoi+= 1;
            return {...state}
        }
        default: 
            return {...state}
    }
}

export default BaiTapOanTuXiReducer