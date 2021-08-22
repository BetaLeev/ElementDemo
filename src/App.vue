<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <img src="./assets/1.jpg" />
    <img src="./assets/2.jpg" />
    <img src="./assets/3.jpg" />
    <img src="./assets/4.jpg" />
    <img src="./assets/5.jpg" />

    <el-dialog title="add a category" :visible.sync="addDialog">
      <el-form ref="addForm" :model="addForm">
        <el-form-item label="id" prop="id">
          <el-input v-model="addForm.id"></el-input>
        </el-form-item>
        <el-form-item label="category" prop="category">
          <el-input v-model="addForm.category"></el-input>
        </el-form-item>

        <el-button class="btn-color" type="primary" @click="onSubmit"
          >Regist</el-button
        >
        <el-button @click="addDialog = false">cancel</el-button>
      </el-form>
    </el-dialog>
    <div class="container">
      <el-button @click="startHacking">Start a star</el-button>
      <el-button @click="addDialog = true">Regist a star</el-button>
      <el-button @click="drop">Drop a star</el-button>

      <main>
        <h2>Top stars and Models in mmhub</h2>

        <div>
          <p>{{ currentNodeData.name }}</p>
          <p>{{ currentNodeData.id }}</p>
        </div>
        <el-tree
          ref="tree"
          :props="props"
          :load="loadNode"
          :expand-on-click-node="false"
          lazy
          show-checkbox
          node-key="id"
          @node-click="nodeClick"
        >
        </el-tree>

        <br />

        <div class="table-container" style="background: #2f2f2f">
          <!-- <el-skeleton :rows="6" animated :loading="loading" /> -->
          <el-table
            :data="tableData"
            :header-cell-style="{ background: '#2f2f2f', color: 'white' }"
            :header-row-style="{ background: '#2f2f2f', color: 'white' }"
            :row-style="{ background: '#2f2f2f', color: 'white' }"
          >
            <el-table-column
              align="center"
              :label="item.label"
              :show-overflow-tooltip="false"
              v-for="item in tableColumns"
              :key="item.id"
            >
              <template slot-scope="scope">
                <template v-if="icon === 'african'">
                  <span v-if="item.prop === 'status'">
                    {{ scope.row.status | formatAfricanStatus }}
                  </span>
                  <span v-else-if="item.prop === 'leaf'">
                    {{ scope.row.leaf | formatAfricanLeaf }}
                  </span>
                  <span v-else-if="item.prop === 'children'">
                    <el-tag
                      style="margin-top: 8px"
                      v-for="item in scope.row.children"
                      :key="item"
                    >
                      {{ item }}
                    </el-tag>
                  </span>
                  <span v-else>
                    {{ scope.row[item.prop] }}
                  </span>
                </template>

                <template v-if="icon === 'asian'">
                  <span v-if="item.prop === 'status'">
                    {{ scope.row.status | formatAsianStatus }}
                  </span>
                  <span v-else>
                    {{ scope.row[item.prop] }}
                  </span>
                </template>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatAsianStatus(val) {
      if (val === 1) {
        return "开启亚洲";
      }
      return "关闭亚洲";
    },
    formatAfricanLeaf(val) {
      if (val === true) {
        return "无";
      }
      return "有";
    },
    formatAfricanStatus(val) {
      if (val === 1) {
        return "开启非洲";
      }
      return "关闭非洲";
    },
  },
  data() {
    return {
      loading: false,
      icon: "african",
      props: {
        label: "name",
        children: "children",
        isLeaf: "leaf",
      },
      addDialog: false,
      addForm: {
        id: "",
        category: "",
      },
      tableColumns: [
        {
          label: "id",
          prop: "id",
        },
        {
          label: "地区名称",
          prop: "name",
        },
        {
          label: "编号",
          prop: "code",
        },
        {
          label: "是否有子类",
          prop: "leaf",
        },
        {
          label: "状态",
          prop: "status",
        },

        {
          label: "地区子类",
          prop: "children",
        },
        {
          label: "备注",
          prop: "remarks",
        },
      ],
      tableData: [
        {
          name: "asian",
          code: 1,
          status: "1",
          leaf: true,
          id: "001",
          children: ["cupSize", "hairColor"],
          remarks: "",
        },
        {
          name: "africans",
          code: 2,
          status: "1",
          leaf: true,
          id: "002",
          children: [],
          remarks: "",
        },
        {
          name: "amercians",
          code: 3,
          status: "1",
          leaf: true,
          id: "003",
          children: [],
          remarks: "",
        },
      ],
      currentNode: {},
      currentNodeData: {},
      newData: [{ name: "asian", leaf: true, id: "002", children: [] }],
      treeData: [
        {
          name: "model",
          id: "001",
          leaf: false,
          children: [
            // {
            //   name: "asian",
            //   leaf: false,
            //   id: 1,
            //   children: [
            //     {
            //       id: 11,
            //       name: "cupSize",
            //       leaf: false,
            //       children: [
            //         {
            //           name: "A",
            //           leaf: true,
            //         },
            //         {
            //           name: "B",
            //           leaf: true,
            //         },
            //         {
            //           name: "C",
            //           leaf: true,
            //         },
            //       ],
            //     },
            //     {
            //       name: "hairColor",
            //       id: 12,
            //       leaf: false,
            //       children: [
            //         "auburn",
            //         "bald",
            //         "black",
            //         "blond",
            //         "grey",
            //         "red",
            //         "various",
            //         "other",
            //       ],
            //     },
            //     {
            //       name: "age",
            //       id: 13,
            //       leaf: false,
            //       children: ["18", "20", "30", "40", "50"],
            //     },
            //   ],
            // },
          ],
        },
      ],
    };
  },
  methods: {
    drop() {
      const originData = this.newData;
      const location = originData.indexOf(this.currentNodeData);
      console.log(originData, "originData");
      console.log(this.currentNodeData, "currentNodeData");
      originData.splice(location, 1);
      this.currentNode.parent.loaded = false;
      this.currentNode.parent.expand();
    },
    onSubmit() {
      const originData = this.newData;
      const data = Object.assign({}, this.addForm);
      originData.push({
        name: data.category,
        id: data.id,
        leaf: true,
      });
      this.newData = originData;
      this.refreshNodeBy(this.currentNode);
      this.$refs.addForm.resetFields();
      this.addDialog = false;
      this.startHacking();
    },

    refreshNodeBy(node) {
      // let node = this.$refs.tree.getNode(id); // 通过节点id找到对应树节点对象
      // console.log(node, "node refreshNodeBy");
      node.loaded = false;
      node.expand(); // 主动调用展开节点方法，重新查询该节点下的所有子节点
    },
    getTreeData(id) {
      return this.treeData[0].children.filter((item) => item.id === id)[0]
        .children;
    },
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic girl!",
        duration: 5000,
      });
    },
    nodeClick(currentNodeData, Node, self) {
      console.log(currentNodeData, "current");
      console.log(Node, "Node");
      this.currentNodeData = currentNodeData;
      console.log(self, "self");
    },

    loadNode(node, resolve) {
      console.log(node, "loadNode node");
      // console.log(resolve, "resolve");
      this.currentNode = node;
      if (node.level === 0) {
        return resolve([{ name: "model", id: "001" }]);
      }
      return resolve(this.newData);

      // console.log(node, "node");
      const id = node.id;
      console.log(id, "id");

      // setTimeout(() => {
      //   const data = this.asian.children;
      //   resolve(data);
      // }, 500);
    },
  },
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  /* background: #f90; */
  background: #000;
  padding: 20px;
  margin: 0;
  height: 888px;
}

.container{
  padding: 8px;
}

.btn-color {
  color: #ff9900;
  background: #ff9900;
}
main {
  margin: 10px auto;
  width: 666px;
  padding: 20px;
}
.el-tree {
  background: #000;
  color: white;
}

.el-tree-node__content:hover {
  background: #000;
}
.el-tree-node:focus > .el-tree-node__content {
  background: #000;
}

.el-button--default {
  background: #ff9900;
  color: #000;
  border: none;
}

.el-table tbody tr:hover > td {
  background-color: #363636 !important;
}
</style>
