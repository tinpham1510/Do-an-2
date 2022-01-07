import React, { useContext, useEffect, useState } from 'react';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import './Dashboard.css'
import img2 from '../../Assets/phong-tro-2.jpg'
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { apiUrl } from '../../contexts/constant';
import { RoomContext } from '../../contexts/RoomsContext';
import { TotalContext } from '../../contexts/TotalContext';
import { Button } from 'react-bootstrap';

const Dashboard = () => {
    let none = 'còn trống'
    let none1 = 'Đang thuê'
    let number = Intl.NumberFormat()
    const {
        roomState: {rooms},
        getRooms
    } = useContext(RoomContext)

    const {
        totalState: {totals},
        getTotals
    } = useContext(TotalContext)
    useEffect(()=>{
        getRooms()
    },[rooms])
    useEffect(()=>{
        getTotals()
    },[totals])

    const [totalNone, setNone] = useState(0)
    const [totalNone1, setNone1] = useState(0)
    const [money, setList] = useState(0)
    const [money1, setList1] = useState(0)
    useEffect(()=>{
        axios({
            method: "GET",
            url: `${apiUrl}/rooms/status${none}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setNone(parseInt(resp.data.total))
        })

        axios({
            method: "GET",
            url: `${apiUrl}/rooms/status${none1}`,
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken") ,
            },
            withCredentials: true
        })
        .then(resp=>{
            setNone1(parseInt(resp.data.total))
        })
    })

    const series = [totalNone1,totalNone]
    const options = {
              chart: {
                width: 400,
                type: 'donut',
              },
              labels: ['Đang thuê', 'Còn trống'],
              responsive: [{
                breakpoint: 500,
                options: {
                  chart: {
                    width: 400,
                    height: 400,
                  },
                  legend: {
                    position: 'top',
                  }
                }
              }]
            }
    const [sayID, setID] = useState(localStorage.getItem("ID"));
    useEffect(()=>{
        if(localStorage.getItem("ID")==2)
        {
            var ID = document.getElementsByClassName("container_dash");
            for(var i=0 ; i<ID.length;i++)
            {
                ID[i].setAttribute("style", "margin-left: 3%")
            }
        }
        else if(localStorage.getItem("ID")==1)
        {

            var ID1 = document.getElementsByClassName("container_dash");
            for(var i=0 ; i<ID1.length;i++)
            {
                ID1[i].setAttribute("style", "margin-left: 10%")
            }
        }
    
})

const Handle = ()=>{
    if(totals!=null)
    {
        const moneyInbank = totals.map(item=>item.sum).reduce((a,b)=> a + b)
        const moneyInbank2 = totals.map(item=>item.pay).reduce((a,b)=> a + b)
        setList(moneyInbank)
        setList1(moneyInbank2)
    }
}


const series1= [{
    name: 'Tổng doanh thu ước tính',
    data: [money]
  }, {
    name: 'Doanh thu hiện có',
    data: [money1]
  }, {
    name: 'Còn nợ',
    data: [money - money1]
  }]
  const options1 = {
    chart: {
      type: 'bar',
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: [ 'Doanh thu'],
    },
    yaxis: {
      title: {
        
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return number.format(val) + " VNĐ"
        }
      }
    }
  }

    return (
        <div>
             <h2 className="container_content">Báo cáo</h2>
            <div className="Container">
                
                        <div className="container_dash">
                            <div className="container__dashboard">
                                <div className='container___title' >
                                    Tình trạng phòng
                                </div>
                                <div className='container___dash'>
                                <ReactApexChart options={options} series={series} type="donut" width={380} />
                                </div>
                           

                            </div>
                        </div>
                        <div className="container_dash">
                            <div className="container__dashboard">
                                <div className='container___title' >
                                    Danh sách phòng
                                </div>
                                <div className='container___dash'>
                                <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                                    <thead>
                                            <tr>
                                                <th>Tầng</th>
                                                <th>Phòng</th>
                                                <th>Giá (VND)</th>
                                                <th>Tình trạng</th>
                                            </tr>
                                    </thead>
                                    {rooms!=null&&rooms.map((info)=>(
                                    <tbody>
                                        <tr>
                                            <td>{info.area}</td>
                                            <td>{info.name}</td>
                                            <td>{number.format(info.cost)}</td>
                                            <td>{info.status}</td>
                                        </tr>
                                    </tbody>
                                    ))}
                                    </table>
                                </div>
                           


                            </div>
                        </div>
                        <div className="container_dash">
                            <div className="container__dashboard">
                            <div className='container___title' >
                                    Danh sách khách nợ tiền phòng
                                </div>
                                <div className='container___dash'>
                                <table className="table table-bordered" style={{margin: "30px 5%" , width: "90%"}}>
                                    <thead>
                                            <tr>
                                                <th>Tầng</th>
                                                <th>Phòng</th>
                                                <th>Khách thuê</th>
                                                <th>Còn nợ (VNĐ)</th>
                                            </tr>
                                    </thead>
                                    {totals!=null&&totals.map((info)=>(
                                    <tbody>
                                      { info.sum != info.pay&&info.sum - info.pay > 0?
                                        <tr>
                                            <td>{info.room.area}</td>
                                            <td>{info.room.name}</td>
                                            <td>{info.customer.name}</td>
                                            <td>{number.format(info.sum - info.pay)}</td>
                                        </tr>
                                        :null
}
                                    </tbody>
                                    ))}
                                    </table>
                                </div>
                            
                            </div>
                        </div>
                        <div className="container_dash">
                            <div className="container__dashboard" onMouseEnter={Handle}>
                                <div className='container___title' >
                                    Doanh thu
                                </div>
                                <div className='container___dash'>
                                <ReactApexChart options={options1} series={series1} type="bar" width={450} /> 
                                </div>
                            </div>
                        </div>
                        


                </div>
        </div>
      
        
    );
}

export default Dashboard;
