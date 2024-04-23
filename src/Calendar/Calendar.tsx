import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import moment from "moment";
import { CiCirclePlus } from "react-icons/ci";

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 63px);
    padding-top: 15px;
    
    @media(max-width:700px) {
        height: 100%;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    margin: 0 auto;
    background: #eff0f2;
    animation: fadein 1s;

    @keyframes fadein {
        from {
            width: 80%;
        }
        to {
            width: 100%;
        }
    }
`;

const Content = styled.div`
    width: 80%;
    position: relative;
    top: 5vh;
    margin: auto;
    display: grid;
    
    @media(max-width:1100px) {
        width: 90%;
    }
    @media(max-width:700px) {
        position: unset;
        padding-top: 25px;
    }
`;

const FlexBox = styled.div`
    display: flex;
    gap: 30px;
    
    @media(max-width:700px) {
        display: unset;

        & > div:nth-child(1) {
            margin-bottom: 20px;
        }
    }
`; 

const TileContentDiv = styled.div`
    position: absolute;
    top: 40%;
    left: 7px;

    @media(max-width:700px) {
        left: 0;
    }
`;

const InOutFlag = styled.div<{color: string}>`
    color: ${p => (p.color)};
    border-left: 4px solid ${p => (p.color)};
    padding-left: 12px;
    
    @media(max-width:930px) {
        padding-left: 3px;
    }
`;

const DetailBox = styled.div`
    flex: 1;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 13px;
    background: white;
`;

const SummaryDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid gray;
`;

const DetailInDiv = styled.div<{color: string}>`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
    border-right: 4px solid ${p => (p.color)};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.2) 0px 6px 12px -2px, rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
`;

const DetailVal = styled.div<{color: string}>`
    display: flex;
    align-items: end;
    font-weight: bold;
    color: ${p => (p.color)};
`;

const DetailAddBtn = styled.div`
    text-align: center;
    font-size: 30px;
    color: #606060;
    
    & > svg {
        cursor: pointer;
    }
`;

type DetailType = {
    categoryID: number;
    categoryName: string;
    title: string;
    val: number;
}

type CalendarType = {
    date: number;
    in: DetailType[];
    out: DetailType[];
}

const testData: CalendarType[] = [
    {
        date: 1713796936,
        in: [],
        out: [
            {
                categoryID: 1,
                categoryName: "식비",
                title: "햄버거",
                val: 5100
            },
            {
                categoryID: 1,
                categoryName: "식비",
                title: "콩밥",
                val: 100
            }
        ]
    }, 
    {
        date: 1713874423,
        in: [
            {
                categoryID: 4,
                categoryName: "부수입",
                title: "용돈",
                val: 50000
            },
        ],
        out: [
            {
                categoryID: 2,
                categoryName: "취미",
                title: "퍼즐",
                val: 10000
            },
            {
                categoryID: 3,
                categoryName: "선물",
                title: "인형",
                val: 18000
            }
        ]
    }
]

const CalendarPage: React.FC = () => {
    const data: CalendarType[] = useMemo(() => testData, [testData]) // API 연동

    const [value, onChange] = useState<any>(new Date());
    const [selectedDate, setSelectedData] = useState<CalendarType>(data[0]);

    const selectedSumIn = useMemo(() => selectedDate.in.reduce((sum, current) => sum + current.val, 0), [selectedDate])
    const selectedSumOut = useMemo(() => selectedDate.out.reduce((sum, current) => sum + current.val, 0), [selectedDate])

    useEffect(() => {
        var selected = data.filter(val => {
            var unixTime = new Date(val.date * 1000);
            return moment(unixTime).format("YYYY-MM-DD") === moment(value).format("YYYY-MM-DD")
        })[0];

        if (selected) {
            setSelectedData(selected);
        } else { // 해당 날짜에 데이터가 없을 때
            var newData: CalendarType = {
                date: value,
                in: [],
                out: []
            }
            setSelectedData(newData)
        }
        
    },[value])

    const tileContent = ({ date }: any) => {
        return data.filter(value => {
            var unixTime = new Date(value.date * 1000);
            return moment(unixTime).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")
        }).map((value) => {
            var inSum = value.in.reduce((sum, current) => sum + current.val, 0);
            var outSum = value.out.reduce((sum, current) => sum + current.val, 0);
            return (
                <TileContentDiv>
                    {inSum > 0 && <InOutFlag color="green">{inSum.toLocaleString()}</InOutFlag>}
                    {outSum > 0 && <InOutFlag color="red">{outSum.toLocaleString()}</InOutFlag>}
                </TileContentDiv>
            )
        })
    }

    const ProcSelectedDetails = (selected: DetailType, type: string) => {
        return (
            <DetailInDiv color={type === 'in' ? 'green' : 'red'}>
                <div>
                    <div style={{ fontSize: '12px', color: 'gray' }}>{selected.categoryName}</div>
                    {selected.title}
                </div>
                <DetailVal color={type === 'in' ? 'green' : 'red'}>{type === 'in' ? '+' : '-'}{selected.val.toLocaleString()}</DetailVal>
            </DetailInDiv>
        )
    }

    return (
        <>
            <Wrapper>
                <Container>
                    <Content>
                        <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>Calendar</h2>
                        <FlexBox>
                            <Calendar
                                onChange={onChange}
                                value={value}
                                formatDay={(locale, date) => moment(date).format("DD")}
                                next2Label={null}
                                prev2Label={null}
                                tileContent={tileContent}
                            />
                            <DetailBox>
                                <p style={{ fontWeight: 'bold', marginLeft: '10px' }}>{moment(value).format("YYYY-MM-DD")} 내역</p>
                                <SummaryDiv>
                                    <div>
                                        <p>수입</p>
                                        <span style={{ fontSize: '22px', color: 'green' }}>{selectedSumIn.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <p>지출</p>
                                        <span style={{ fontSize: '22px', color: 'red' }}>{selectedSumOut.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <p>합계</p>
                                        <span style={{ fontSize: '22px', color: '#909090' }}>{(selectedSumIn - selectedSumOut).toLocaleString()}</span>
                                    </div>
                                </SummaryDiv>
                                {selectedDate?.in.map((val) => ProcSelectedDetails(val, "in"))}
                                {selectedDate?.out.map((val) => ProcSelectedDetails(val, "out"))}
                                <DetailAddBtn>
                                    <CiCirclePlus />
                                </DetailAddBtn>
                            </DetailBox>
                        </FlexBox>
                    </Content>
                </Container>
            </Wrapper>
        </>
    )
}


export default CalendarPage;