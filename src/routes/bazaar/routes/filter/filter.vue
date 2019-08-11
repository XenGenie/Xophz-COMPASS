<template>
  <v-dialog
    width="50vw"
    v-model="isActive"
  >
    <v-card>
      <v-card-title>Search Products</v-card-title>
      <form
        novalidate
        @submit.prevent="findProducts"
      >
        <v-card-text>
          <div class="v-layout v-gutter">
            <!-- <div class="v-layout-item v-small-size-100"> -->
            <!--   <v-field> -->
            <!--     <label for="sku_by">Find SKU That:</label> -->
            <!--     <v-select  -->
            <!--       name="sku_by"  -->
            <!--       id="sku_by"  -->
            <!--       v-model="form.sku_by"  -->
            <!--       :disabled="isSaving" -->
            <!--       v-dense  -->
            <!--     > -->
            <!--       <v-option   -->
            <!--         v-for="(option, index) in dropdown"  -->
            <!--         :value="index" -->
            <!--       > -->
            <!--         {{option}} -->
            <!--       </v-option> -->
            <!--     </v-select> -->
            <!--   </v-field> -->
            <!-- </div> -->
            <div class="v-layout-item v-small-size-100">
              <v-field>
                <label for="sku">SKU</label>
                <v-input
                  name="sku"
                  id="sku"
                  v-model="form.sku"
                  :disabled="isSaving"
                />
              </v-field>
            </div>
            <div class="v-layout-item v-small-size-100">
              <v-field>
                <label for="title">Title</label>
                <v-input
                  name="title"
                  id="title"
                  v-model="form.title"
                  :disabled="isSaving"
                />
              </v-field>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="v-secondary"
            @click="isActive = false"
          >
            Cancel
          </v-btn>
          <v-btn
            type="submit"
            class="v-primary"
          >
            Find Products
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>
<script src="./filter.controller.js"></script>
