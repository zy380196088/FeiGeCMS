<template>
  <div class="tree-wrap">
    <div class="tree-search">
      <input placeholder="查询关键字"/>
    </div>
    <ul v-if="treeData.length > 0" class="show">
      <li v-for="item in treeData" :key="item.id" >
        <i class="pz-icon fn-mr5 isDropdown"></i>
        <span>{{item.name}}</span>
        <span class="fn-ml5"> ( {{item.users.length}} ) 人</span>
        <ul v-if="item.childs.length > 0" data-level="1" class="show">
          <li v-for="subItem in  item.childs" :key="subItem.id">
            <i class="pz-icon fn-mr5"></i>
            <span>{{subItem.name}}</span>
            <span class="fn-ml5"> ( {{subItem.users.length}} ) 人</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "部门结构",
        treeOption:{
          openSearch:true,
          openSelecte: true,
        },
        treeData: [{
          checked: false,
          create_time: "2017-11-17 15:17:04",
          level: 1,
          division_manager_flag: 1,
          type: 1,
          monitor_flag: 0,
          childs: [{
              checked: false,
              create_time: "2017-11-20 14:07:54",
              department_id: 137,
              name: "南星街道",
              id: 153,
              type: 2,
              childs: [{
                  checked: false,
                  create_time: "2017-12-26 16:00:13",
                  department_id: 137,
                  name: "南星路",
                  id: 189,
                  type: 2,
                  childs: [{
                    checked: false,

                    create_time: "2018-04-28 16:50:30",
                    department_id: 137,
                    name: "南星分部门",
                    id: 219,
                    type: 2,
                    childs: [{
                      checked: false,

                      create_time: "2018-04-28 16:51:02",
                      department_id: 137,
                      name: "南星下级分部门",
                      id: 220,
                      type: 2,
                      enabled: 1,
                      users: [],
                      order_value: 0
                    }],
                    enabled: 1,
                    users: [{
                        checked: false,

                        real_name_pinyin: "shang4,cheng2,qu1,lian2,luo4,yuan2",
                        role: 0,
                        create_time: "2017-12-20 09:38:15",
                        department_id: 137,
                        robot_flag: 0,
                        finished_task_count: 0,
                        sex: 1,
                        received_task_count: 224,
                        division_id: 219,
                        real_name: "上城区联络员",
                        enabled: 1,
                        average_finished_received_task_time: 0,
                        score: 0,
                        login_name: "18688888888",
                        finished_received_task_time: 0,
                        phone: "18688888888",
                        finish_rate: 0,
                        id: 3847,
                        head_photo: "common/default_head_photo.png",
                        email: ""
                      },
                      {
                        checked: false,

                        real_name_pinyin: "wang2,ping2",
                        role: 0,
                        create_time: "2017-12-26 17:14:39",
                        department_id: 137,
                        robot_flag: 0,
                        finished_task_count: 1,
                        sex: 1,
                        received_task_count: 229,
                        division_id: 219,
                        real_name: "王平",
                        enabled: 1,
                        average_finished_received_task_time: 51,
                        score: 1,
                        login_name: "13601001241",
                        finished_received_task_time: 51,
                        phone: "18143422580",
                        finish_rate: 43,
                        id: 3871,
                        head_photo: "common/default_head_photo.png",
                        email: ""
                      }
                    ],
                    order_value: 0
                  }],
                  enabled: 1,
                  users: [{
                      checked: false,

                      real_name_pinyin: "nan2,xing1,1",
                      role: 0,
                      create_time: "2017-12-26 16:00:44",
                      department_id: 137,
                      robot_flag: 0,
                      finished_task_count: 0,
                      sex: 1,
                      received_task_count: 220,
                      division_id: 189,
                      real_name: "南星1",
                      enabled: 1,
                      average_finished_received_task_time: 0,
                      score: 0,
                      login_name: "13601001239",
                      finished_received_task_time: 0,
                      phone: "13601001239",
                      finish_rate: 0,
                      id: 3866,
                      head_photo: "common/default_head_photo.png",
                      email: ""
                    },
                    {
                      checked: false,

                      real_name_pinyin: "nan2,xing1,lu4,lian2,luo4,yuan2",
                      role: 0,
                      create_time: "2018-06-11 17:29:06",
                      department_id: 137,
                      robot_flag: 0,
                      finished_task_count: 0,
                      sex: 1,
                      received_task_count: 13,
                      division_id: 189,
                      real_name: "南星路联络员",
                      enabled: 1,
                      average_finished_received_task_time: 0,
                      score: 0,
                      login_name: "18657382672",
                      finished_received_task_time: 0,
                      phone: "18657382672",
                      finish_rate: 0,
                      id: 4181,
                      head_photo: "common/default_head_photo.png",
                      email: ""
                    },
                    {
                      checked: false,

                      real_name_pinyin: "zhi1,jiang1,2,wang3,ping2,yuan2",
                      role: 0,
                      create_time: "2017-12-26 15:38:08",
                      department_id: 137,
                      robot_flag: 0,
                      finished_task_count: 0,
                      sex: 2,
                      received_task_count: 218,
                      division_id: 189,
                      real_name: "之江2网评员",
                      enabled: 1,
                      average_finished_received_task_time: 0,
                      score: 0,
                      login_name: "18657248923",
                      finished_received_task_time: 0,
                      phone: "18657248923",
                      finish_rate: 0,
                      id: 3865,
                      head_photo: "common/default_head_photo.png",
                      email: ""
                    },
                    {
                      checked: false,

                      real_name_pinyin: "zi3,hua1,lu4,1",
                      role: 0,
                      create_time: "2017-11-23 14:01:13",
                      department_id: 137,
                      robot_flag: 0,
                      finished_task_count: 71,
                      sex: 1,
                      received_task_count: 278,
                      division_id: 189,
                      real_name: "紫花路1",
                      enabled: 1,
                      average_finished_received_task_time: 116961,
                      score: 172,
                      login_name: "13601001235",
                      finished_received_task_time: 8304237,
                      phone: "13601001235",
                      finish_rate: 2553,
                      id: 3673,
                      head_photo: "common/default_head_photo.png",
                      email: ""
                    },
                    {
                      checked: false,

                      real_name_pinyin: "zi3,hua1,lu4,w,p,y,1",
                      role: 0,
                      create_time: "2018-02-06 09:59:55",
                      department_id: 137,
                      robot_flag: 0,
                      finished_task_count: 0,
                      sex: 1,
                      received_task_count: 112,
                      division_id: 189,
                      real_name: "紫花路wpy1",
                      enabled: 1,
                      average_finished_received_task_time: 0,
                      score: 0,
                      login_name: "18656111118",
                      finished_received_task_time: 0,
                      phone: "18656111118",
                      finish_rate: 0,
                      id: 4064,
                      head_photo: "common/default_head_photo.png",
                      email: ""
                    }
                  ],
                  order_value: 2
                },
                {
                  checked: false,

                  create_time: "2017-11-23 13:56:17",
                  department_id: 137,
                  name: "紫花路",
                  id: 156,
                  type: 2,
                  childs: [{
                    create_time: "2017-11-23 13:56:29",
                    department_id: 137,
                    name: "紫花苑",
                    id: 157,
                    type: 2,
                    childs: [{
                      checked: false,

                      create_time: "2017-11-23 13:56:47",
                      department_id: 137,
                      name: "1幢",
                      id: 158,
                      type: 2,
                      enabled: 1,
                      users: [],
                      order_value: 0
                    }],
                    enabled: 1,
                    users: [{
                        checked: false,

                        real_name_pinyin: "zi3,hua1,yuan4,lian2,luo4,yuan2",
                        role: 2,
                        create_time: "2018-06-11 17:32:25",
                        department_id: 137,
                        robot_flag: 0,
                        finished_task_count: 0,
                        sex: 1,
                        received_task_count: 12,
                        division_id: 157,
                        real_name: "紫花苑联络员",
                        enabled: 1,
                        average_finished_received_task_time: 0,
                        score: 0,
                        login_name: "13867833523",
                        finished_received_task_time: 0,
                        phone: "13867833523",
                        finish_rate: 0,
                        id: 4183,
                        head_photo: "common/default_head_photo.png",
                        email: ""
                      },
                      {
                        checked: false,

                        real_name_pinyin: "zi3,hua1,yuan4",
                        role: 0,
                        create_time: "2017-11-23 14:02:55",
                        department_id: 137,
                        robot_flag: 0,
                        finished_task_count: 51,
                        sex: 1,
                        received_task_count: 281,
                        division_id: 157,
                        real_name: "紫花苑",
                        enabled: 1,
                        average_finished_received_task_time: 69944,
                        score: 131,
                        login_name: "13601001236",
                        finished_received_task_time: 3567162,
                        phone: "13601001236",
                        finish_rate: 1814,
                        id: 3674,
                        head_photo: "common/default_head_photo.png",
                        email: ""
                      }
                    ],
                    order_value: 0
                  }],
                  enabled: 1,
                  users: [],
                  order_value: 1
                }
              ],
              enabled: 1,
              users: [{
                  checked: false,

                  real_name_pinyin: "w,a,n,g,t,a,o",
                  role: 2,
                  create_time: "2018-03-09 11:32:12",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 21,
                  sex: 1,
                  received_task_count: 124,
                  division_id: 153,
                  real_name: "wangtao",
                  enabled: 1,
                  average_finished_received_task_time: 280360,
                  score: 40,
                  login_name: "18758105496",
                  finished_received_task_time: 5887570,
                  phone: "18758105496",
                  finish_rate: 1693,
                  id: 4081,
                  head_photo: "rest/201804/c94eaec2a3694fdaa04d68f44545e67a_8180_2.jpg",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "zi3,yang2,lian2,luo4,yuan2",
                  role: 2,
                  create_time: "2018-01-30 13:20:41",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 144,
                  division_id: 153,
                  real_name: "紫阳联络员",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "baiyunjiedoa",
                  finished_received_task_time: 0,
                  phone: "13500006587",
                  finish_rate: 0,
                  id: 4048,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "xing1,huo3,yong4,hu4",
                  role: 0,
                  create_time: "2017-12-12 10:47:14",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 1,
                  sex: 1,
                  received_task_count: 243,
                  division_id: 153,
                  real_name: "星火用户",
                  enabled: 1,
                  average_finished_received_task_time: 49,
                  score: 1,
                  login_name: "18600008886",
                  finished_received_task_time: 49,
                  phone: "18600008886",
                  finish_rate: 41,
                  id: 3835,
                  head_photo: "common/default_head_photo.png",
                  email: "xh@126.com"
                }
              ],
              order_value: 9
            },
            {
              checked: false,

              create_time: "2018-02-25 09:46:43",
              department_id: 137,
              name: "紫阳街道",
              id: 205,
              type: 2,
              enabled: 1,
              users: [{
                  checked: false,

                  real_name_pinyin: "lian2,luo4,yuan2,1,1,1,1",
                  role: 2,
                  create_time: "2018-06-11 17:31:39",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 7,
                  division_id: 205,
                  real_name: "联络员1111",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "18467283423",
                  finished_received_task_time: 0,
                  phone: "18467283423",
                  finish_rate: 0,
                  id: 4182,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "zi3,yang2,wang3,ping2,yuan2",
                  role: 0,
                  create_time: "2017-11-23 14:00:26",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 129,
                  sex: 1,
                  received_task_count: 313,
                  division_id: 205,
                  real_name: "紫阳网评员",
                  enabled: 1,
                  average_finished_received_task_time: 121383,
                  score: 333,
                  login_name: "13601001234",
                  finished_received_task_time: 15658411,
                  phone: "18202774963",
                  finish_rate: 4121,
                  id: 3672,
                  head_photo: "rest/201806/0508692be09c45b9b5f95f27037da45f_2334258_72368.jpg",
                  email: "863010066@qq.com"
                }
              ],
              order_value: 8
            },
            {
              checked: false,

              create_time: "2017-11-23 13:57:49",
              department_id: 137,
              name: "白云街道",
              id: 159,
              type: 2,
              enabled: 1,
              users: [{
                  checked: false,

                  real_name_pinyin: "zhang1,san1",
                  role: 2,
                  create_time: "2018-01-30 13:39:12",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 114,
                  division_id: 159,
                  real_name: "张三",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "abcdefg",
                  finished_received_task_time: 0,
                  phone: "13876544567",
                  finish_rate: 0,
                  id: 4053,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "xu2,quan2",
                  role: 0,
                  create_time: "2018-06-04 16:49:06",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 10,
                  division_id: 159,
                  real_name: "徐权",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "13876283523",
                  finished_received_task_time: 0,
                  phone: "13876283523",
                  finish_rate: 0,
                  id: 4177,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "zhang1,san1,feng1",
                  role: 0,
                  create_time: "2018-01-30 13:45:59",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 114,
                  division_id: 159,
                  real_name: "张三枫",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "abcdsss",
                  finished_received_task_time: 0,
                  phone: "18677654567",
                  finish_rate: 0,
                  id: 4055,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "zhou1,xiao3,yan4",
                  role: 0,
                  create_time: "2018-02-06 10:42:26",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 90,
                  division_id: 159,
                  real_name: "周小燕",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "17466776757",
                  finished_received_task_time: 0,
                  phone: "17466776757",
                  finish_rate: 0,
                  id: 4075,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                }
              ],
              order_value: 7
            },
            {
              checked: false,

              create_time: "2017-12-12 12:21:06",
              department_id: 137,
              name: "湖滨街道",
              id: 169,
              type: 2,
              enabled: 1,
              users: [{
                real_name_pinyin: "hu2,bin1,lian2,luo4,yuan2",
                role: 2,
                create_time: "2017-12-20 14:06:21",
                department_id: 137,
                robot_flag: 0,
                finished_task_count: 0,
                sex: 1,
                received_task_count: 214,
                division_id: 169,
                real_name: "湖滨联络员",
                enabled: 1,
                average_finished_received_task_time: 0,
                score: 0,
                login_name: "13873008888",
                finished_received_task_time: 0,
                phone: "18143422580",
                finish_rate: 0,
                id: 3848,
                head_photo: "common/default_head_photo.png",
                email: ""
              }],
              order_value: 6
            },
            {
              checked: false,

              create_time: "2018-02-25 09:46:25",
              department_id: 137,
              name: "小营街道",
              id: 204,
              type: 2,
              enabled: 1,
              users: [{
                real_name_pinyin: "xiao3,ying2,lian2,luo4,yuan2",
                role: 0,
                create_time: "2017-12-19 16:54:35",
                department_id: 137,
                robot_flag: 0,
                finished_task_count: 0,
                sex: 2,
                received_task_count: 186,
                division_id: 204,
                real_name: "小营联络员",
                enabled: 1,
                average_finished_received_task_time: 0,
                score: 0,
                login_name: "13786099827",
                finished_received_task_time: 0,
                phone: "13786099827",
                finish_rate: 0,
                id: 3846,
                head_photo: "common/default_head_photo.png",
                email: ""
              }],
              order_value: 5
            },
            {
              checked: false,

              create_time: "2017-12-28 10:10:15",
              department_id: 137,
              name: "清波街道",
              id: 192,
              type: 2,
              childs: [{
                  checked: false,

                  create_time: "2018-06-12 17:33:19",
                  department_id: 137,
                  name: "测试导入部门5",
                  id: 241,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                },
                {
                  checked: false,
                  create_time: "2018-06-12 17:33:19",
                  department_id: 137,
                  name: "测试导入部门6",
                  id: 242,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                },
                {
                  checked: false,

                  create_time: "2018-06-12 17:33:19",
                  department_id: 137,
                  name: "测试导入部门7",
                  id: 243,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                },
                {
                  checked: false,

                  create_time: "2018-06-12 17:33:19",
                  department_id: 137,
                  name: "测试导入部门8",
                  id: 244,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                }
              ],
              enabled: 1,
              users: [{
                  checked: false,

                  real_name_pinyin: "qing1,bo1,lian2,luo4,yuan2",
                  role: 2,
                  create_time: "2018-01-30 13:31:12",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 118,
                  division_id: 192,
                  real_name: "清波联络员",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "barwerwe",
                  finished_received_task_time: 0,
                  phone: "13500006587",
                  finish_rate: 0,
                  id: 4051,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "jian1,guo3",
                  role: 0,
                  create_time: "2018-01-04 10:12:26",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 194,
                  division_id: 192,
                  real_name: "坚果",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "13456747584",
                  finished_received_task_time: 0,
                  phone: "13456747584",
                  finish_rate: 0,
                  id: 3889,
                  head_photo: "common/default_head_photo.png",
                  email: "72734334129@qq.com"
                },
                {
                  checked: false,

                  real_name_pinyin: "zhou1,zhou1",
                  role: 0,
                  create_time: "2018-06-05 17:11:44",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 10,
                  division_id: 192,
                  real_name: "周舟",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "13897562819",
                  finished_received_task_time: 0,
                  phone: "13897562819",
                  finish_rate: 0,
                  id: 4179,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                }
              ],
              order_value: 4
            },
            {
              checked: false,

              create_time: "2017-11-23 13:55:35",
              department_id: 137,
              name: "之江街道",
              id: 154,
              type: 2,
              childs: [{
                  create_time: "2017-12-22 13:12:54",
                  department_id: 137,
                  name: "之江街道1区",
                  id: 173,
                  type: 2,
                  enabled: 1,
                  users: [{
                    checked: false,

                    real_name_pinyin: "yi1,dong4",
                    role: 0,
                    create_time: "2017-11-23 14:16:22",
                    department_id: 137,
                    robot_flag: 0,
                    finished_task_count: 26,
                    sex: 1,
                    received_task_count: 262,
                    division_id: 173,
                    real_name: "一栋",
                    enabled: 1,
                    average_finished_received_task_time: 171383,
                    score: 79,
                    login_name: "13601001237",
                    finished_received_task_time: 4455961,
                    phone: "13601001237",
                    finish_rate: 992,
                    id: 3675,
                    head_photo: "common/default_head_photo.png",
                    email: ""
                  }],
                  order_value: 0
                },
                {
                  checked: false,

                  create_time: "2017-12-22 13:13:19",
                  department_id: 137,
                  name: "之江街道2区",
                  id: 174,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                },
                {
                  create_time: "2018-01-20 15:01:09",
                  department_id: 137,
                  name: "水澄桥街道",
                  id: 203,
                  type: 2,
                  enabled: 1,
                  users: [],
                  order_value: 0
                }
              ],
              enabled: 1,
              users: [{
                  checked: false,

                  real_name_pinyin: "zhi1,jiang1,lian2,luo4,yuan2",
                  role: 2,
                  create_time: "2018-02-06 10:02:41",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 100,
                  division_id: 154,
                  real_name: "之江联络员",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "18677887654",
                  finished_received_task_time: 0,
                  phone: "18677887654",
                  finish_rate: 0,
                  id: 4065,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  checked: false,

                  real_name_pinyin: "xiao3,nao3,fu3",
                  role: 0,
                  create_time: "2017-12-15 09:23:08",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 1,
                  sex: 2,
                  received_task_count: 200,
                  division_id: 154,
                  real_name: "小脑斧",
                  enabled: 1,
                  average_finished_received_task_time: 124,
                  score: 1,
                  login_name: "15267017747",
                  finished_received_task_time: 124,
                  phone: "18606508916",
                  finish_rate: 50,
                  id: 3844,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {

                  real_name_pinyin: "xiao3,yu4,mi3",
                  role: 0,
                  create_time: "2017-12-15 14:39:04",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 10,
                  sex: 2,
                  received_task_count: 194,
                  division_id: 154,
                  real_name: "小玉米",
                  enabled: 1,
                  average_finished_received_task_time: 88091,
                  score: 19,
                  login_name: "17681877068",
                  finished_received_task_time: 880918,
                  phone: "17681877068",
                  finish_rate: 515,
                  id: 3845,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  real_name_pinyin: "xin1,hao4",
                  role: 0,
                  create_time: "2018-03-27 17:26:25",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 0,
                  sex: 1,
                  received_task_count: 52,
                  division_id: 154,
                  real_name: "新号",
                  enabled: 1,
                  average_finished_received_task_time: 0,
                  score: 0,
                  login_name: "xinjian",
                  finished_received_task_time: 0,
                  phone: "18202774963",
                  finish_rate: 0,
                  id: 4092,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                }
              ],
              order_value: 2
            },
            {
              create_time: "2018-04-04 10:25:15",
              department_id: 137,
              name: "任务",
              id: 211,
              type: 2,
              enabled: 1,
              users: [{
                  real_name_pinyin: "c,e,s,h,i,0,0,5",
                  role: 0,
                  create_time: "2018-04-10 13:37:05",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 3,
                  sex: 1,
                  received_task_count: 34,
                  division_id: 211,
                  real_name: "ceshi005",
                  enabled: 1,
                  average_finished_received_task_time: 3355,
                  score: 8,
                  login_name: "ceshi005",
                  finished_received_task_time: 10065,
                  phone: "18143422580",
                  finish_rate: 882,
                  id: 4136,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                },
                {
                  real_name_pinyin: "ce4,shi4,0,0,4",
                  role: 0,
                  create_time: "2018-04-10 10:30:00",
                  department_id: 137,
                  robot_flag: 0,
                  finished_task_count: 2,
                  sex: 1,
                  received_task_count: 34,
                  division_id: 211,
                  real_name: "测试004",
                  enabled: 1,
                  average_finished_received_task_time: 4706,
                  score: 6,
                  login_name: "ceshi004",
                  finished_received_task_time: 9413,
                  phone: "18143422580",
                  finish_rate: 588,
                  id: 4133,
                  head_photo: "common/default_head_photo.png",
                  email: ""
                }
              ],
              order_value: 1
            },
            {
              create_time: "2017-12-22 14:52:23",
              department_id: 137,
              name: "之江1",
              id: 186,
              type: 2,
              enabled: 1,
              users: [{
                real_name_pinyin: "bai2,yun2,lian2,luo4,yuan2",
                role: 2,
                create_time: "2017-11-23 14:17:28",
                department_id: 137,
                robot_flag: 0,
                finished_task_count: 23,
                sex: 1,
                received_task_count: 268,
                division_id: 186,
                real_name: "白云联络员",
                enabled: 1,
                average_finished_received_task_time: 89174,
                score: 134,
                login_name: "13601001238",
                finished_received_task_time: 2051007,
                phone: "18143422580",
                finish_rate: 858,
                id: 3676,
                head_photo: "common/default_head_photo.png",
                email: ""
              }],
              order_value: 0
            },
            {
              create_time: "2018-06-14 14:21:06",
              department_id: 137,
              name: "导入部门",
              id: 255,
              type: 2,
              enabled: 1,
              users: [],
              order_value: 0
            },
            {
              create_time: "2018-06-14 14:21:06",
              department_id: 137,
              name: "2",
              id: 256,
              type: 2,
              enabled: 1,
              users: [],
              order_value: 0
            }
          ],
          enabled: 1,
          users: [],
          mission_autojob_flag: 1,
          export_task_template: null,
          province_id: 0,
          name: "上城区委宣传部1",
          id: 137,
          district_id: 0,
          public_flag: 1,
          country_id: 1,
          city_id: 0,
          order_value: 4
        }],
      }
    },
    props: {
      listArr: {
        type: Array,
      }
    },
    methods: {
      init() {
        //初始化树
        let treeSourceData = JSON.parse(JSON.stringify(this.treeData))
      }
    }

  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
$font-size = 14px;
$activeColor = $green;
$font-color = #666;
$border-color =  #f1f1f1;
import "@/assets/stylus/base.styl"
import "@/assets/stylus/color.styl"
ol, ul, li
  list-style none
.treeOption-panel
  text-align left
  padding 20px
  width 100%
  height 100%
  background-color transparent
  box-sizing border-box
  .treeOption-title
    font-weight bold
    height 40px
    line-height 40px


  
.select-user-tree
  width 100%
  max-width 800px
  height 360px

.tree-wrap
  width 100%
  height 100%
  font-size 14px
  line-height 20px
  .show
    display block
  ul
    display none
    line-height 36px
  li
    width 100%
    line-height 36px
    cursor pointer
    &:first-child
      display block
      line-height 36px
      overflow hidden
    span
      height 36px
    input
      display none
      height 36px
      margin-left 5px
      float right
      z-index 19
    ul
      padding-left 20px
  [data-hasChilds]
    .isDropdown:first-child:before
      content "\e62c"
    i:first-child:before
      content "\e62e"
  [data-noChilds]
    i:first-child:before
      content "\e6fe"
  .tree-users-panel
    position absolute
    right 0
    width 400px
    height auto
    background-color $activeColor
    overflow hidden
  .tree-search
    width 100%
    box-size border-box
    height 32px
    margin 15px 5px
    input
      line-height 32px
      height 32px
      border 1px solid $border-color
      border-radius 4px
      outline none
      padding 4px 10px
      color $font-color
      &:focus
        border 1px solid $activeColor
    i
      padding 9px
  .btn
    margin 15px 5px
    i
      margin-right 5px
  .org-header
    width 100%
    height 90px
    .org-title
      width 100%
      display inline-block
      line-height 32px
      font-size 20px
      font-weight bold
  .org-items-box
    width 100%
    height auto
    border-top 1px solid #f1f1f1
    ul
      li:nth-child(2n)
        background-color #fff
      li:nth-child(2n + 1)
        background-color #fafafa
    .org-items-title
      font-weight bold
      font-size 16px
    p
      height 68px
      line-height 60px
      padding 0 0 0 15px
    ul
      max-height 300px
      overflow-y scroll
      li
        padding 0 15px
        height 60px
        line-height 60px
        &:last-child
          border-bottom 0
  table
    .btn
      border-color $borderColor
      color $fontBlackColor
      &:hover
        border-color $activeColor
        color $activeColor

.editDeptSelectParentDeptBox
  box-sizing border-box
  width 100%
  max-height 200px
  border 1px solid #d5d5d5
  background-color #fff
  overflow-y scroll
  z-index 29
  li
    padding-left 5px
  li:hover
    background $activeColor

.deptSelectTree
  position absolute
  top 0
  left 25
  width 330px
  background-color #fff
  border 1px solid $borderColor
  border-radius $borderRadius
  box-sizing border-box
  line-height 40px
  z-index 99
  .layui-tree-branch,.layui-tree-leaf
    display none !important
  cite:hover
    color $activeColor
</style>
