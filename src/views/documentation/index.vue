<template>
  <div class="app-container documentation-container">

    <div class="box-card">
      <el-card class="box-card" style="margin-top:1px;">
        <div slot="header" class="clearfix">
          <svg-icon icon-class="international" />demo数据
        </div>
        <div>
          <el-radio-group v-model="lang" size="small">
            <el-radio label="zh" border>简体中文</el-radio>
            <el-radio label="en" border>English</el-radio>
            <el-radio label="es" border>Español</el-radio>
          </el-radio-group>
          <el-tag style="margin-top:15px;display:block;" type="info">{{ $t('i18nView.note') }}</el-tag>
        </div>
      </el-card>
    </div>

    <el-row :gutter="20" style="margin:100px 15px 50px;">
      <el-col :span="12" :xs="24">
        <div class="block">
          <el-date-picker v-model="currentTime" :placeholder="'选择日期'" type="date" />
        </div>
        <div class="block">
          <el-select v-model="selected" :placeholder="'下拉选项'">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="block">
          <el-button class="item-btn" size="small">常规按钮</el-button>
          <el-button class="item-btn" size="small" type="primary">主要按钮</el-button>
          <el-button class="item-btn" size="small" type="success">成功按钮</el-button>
          <el-button class="item-btn" size="small" type="info">信息按钮</el-button>
          <el-button class="item-btn" size="small" type="warning">警告按钮</el-button>
          <el-button class="item-btn" size="small" type="danger">危险按钮1</el-button>
        </div>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-table :data="tableData" fit highlight-current-row border style="width: 100%">
          <el-table-column :label="'姓名'" prop="name" width="100" align="center" />
          <el-table-column :label="'年龄'" prop="age" width="120" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.age | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
            </template>
          </el-table-column>
          <el-table-column :label="'地址'" prop="address" />
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Documentation',
  data() {
    return {
      lang: '',
      currentTime: Date.now(),
      selected: '',
      options: [
        {
          value: '1',
          label: '选项一'
        },
        {
          value: '2',
          label: '选项二'
        },
        {
          value: '3',
          label: '现象三'
        }
      ],
      tableData: [
        { name: '姓名一', age: 45, address: '地址一' },
        { name: '姓名二', age: '2016-05-04', address: '地址二' },
        { name: '姓名三', age: 33, address: '地址三' }
      ],
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.documentation-container {
  margin: 10px;
  .block {
    padding: 8px;
  }
  .box-card {
    width: 600px;
    max-width: 100%;
    margin: 20px;
  }
}
</style>
