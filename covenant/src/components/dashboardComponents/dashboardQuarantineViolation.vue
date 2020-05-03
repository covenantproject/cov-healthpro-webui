<template>
    <div class="box">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="subtitle">
                        <strong>Individuals currently Non-Compliant</strong>
                    </h2>
                </div>
            </div>
        </section>

        <table class="table is-fullwidth is-hoverable">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Last Reported</th>
                <th>Duration</th>
                <th>Distance</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" @click="onRowClicked" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.lastReported}}</td>
                <td>{{item.duration}}</td>
                <td>{{item.distance}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "dashboardItem",

        data: () => {
            return {
                sampleData
            }
        },
        methods: {
            onRowClicked: function(value) {
                console.log("quarantine violation table row clicked " + value);
            }
        },
        computed: {
            getData: function() {
                return this.sampleData.quarantineViolations;
            }
        }
    }
</script>