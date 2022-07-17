import Mock from "mockjs";
import photo0907 from '@/assets/2019-09-07.jpg';
import photo0115 from '@/assets/2022-01-15.jpg';
import photo0618 from '@/assets/2021-06-18.jpg';

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [{
            id: "1",
            midImg: photo0115,
            bigImg: photo0115,
            title: "2022/01/15",
            description: "「如果生活有开关，那和朋友见面就是一键快乐」",
        },
        {
            id: "2",
            midImg: photo0907,
            bigImg: photo0907,
            title: "2019/09/07",
            description: "「摩天轮的寓意大概是：无论巅峰还是低谷，都以你为中心」",
        },
        {
            id: "3",
            midImg: photo0618,
            bigImg: photo0618,
            title: "2021/06/18",
            description: "「如果志同道合，希望旗鼓相当，如果各有千秋，希望顶峰相见」",
        },
    ]
})