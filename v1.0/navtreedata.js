/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "userver", "index.html", [
    [ "Documentation", "de/d6a/md_en_2index.html", [
      [ "Introduction", "de/d6a/md_en_2index.html", [
        [ "I/O-bound Applications and Coroutines", "d7/d08/md_en_2userver_2intro__io__bound__coro.html", null ],
        [ "The Basics", "d8/d00/md_en_2userver_2intro.html", null ],
        [ "Feature Comparison with other Frameworks", "da/d26/md_en_2userver_2framework__comparison.html", null ],
        [ "Supported Platforms", "d0/dd5/md_en_2userver_2supported__platforms.html", null ],
        [ "Configure and Build", "d3/da9/md_en_2userver_2tutorial_2build.html", null ],
        [ "Deploy Environment Specific Configurations", "d2/d58/md_en_2userver_2deploy__env.html", null ],
        [ "Releases, Trunk-based Development and Pull Requests", "d0/d7b/md_en_2userver_2development_2releases.html", null ],
        [ "Roadmap and Changelog", "da/d9a/md_en_2userver_2roadmap__and__changelog.html", null ],
        [ "Frequently Asked Questions", "de/d61/md_en_2userver_2faq.html", null ]
      ] ],
      [ "Tutorial", "de/d6a/md_en_2index.html", [
        [ "Writing your first HTTP server", "da/d16/md_en_2userver_2tutorial_2hello__service.html", null ],
        [ "Writing your own configs server", "d4/d95/md_en_2userver_2tutorial_2config__service.html", null ],
        [ "Production configs and best practices", "db/d69/md_en_2userver_2tutorial_2production__service.html", null ],
        [ "TCP half-duplex server with static configs validation", "dc/d93/md_en_2userver_2tutorial_2tcp__service.html", null ],
        [ "TCP full-duplex server with metrics and Spans", "db/db9/md_en_2userver_2tutorial_2tcp__full.html", null ],
        [ "Pre-caching data from HTTP remote", "dc/d8a/md_en_2userver_2tutorial_2http__caching.html", null ],
        [ "HTTP Flatbuf handler and requests", "d8/d91/md_en_2userver_2tutorial_2flatbuf__service.html", null ],
        [ "gRPC client and service", "d6/daa/md_en_2userver_2tutorial_2grpc__service.html", null ],
        [ "PostgreSQL service", "d4/d31/md_en_2userver_2tutorial_2postgres__service.html", null ],
        [ "MongoDB service", "d5/d81/md_en_2userver_2tutorial_2mongo__service.html", null ],
        [ "Redis service", "d3/da2/md_en_2userver_2tutorial_2redis__service.html", null ],
        [ "Custom Authorization/Authentication via PostgreSQL", "da/d24/md_en_2userver_2tutorial_2auth__postgres.html", null ],
        [ "Writing your WebSocket service", "d7/d9e/md_en_2userver_2tutorial_2websocket__service.html", null ],
        [ "Non-Coroutine Console Tool", "d2/dfc/md_en_2userver_2tutorial_2json__to__yaml.html", null ]
      ] ],
      [ "Generic development", "de/d6a/md_en_2index.html", [
        [ "Component system", "dc/dcc/md_en_2userver_2component__system.html", [
          [ "Clients", "de/d08/group__userver__clients.html", null ],
          [ "HTTP Handlers", "d2/d9b/group__userver__http__handlers.html", null ],
          [ "Other components", "dd/d1c/group__userver__components.html", null ]
        ] ],
        [ "Synchronization Primitives", "d6/d6c/md_en_2userver_2synchronization.html", null ],
        [ "Formats (JSON, YAML, BSON, ...)", "d2/d20/md_en_2userver_2formats.html", null ],
        [ "Logging and Tracing", "df/d0c/md_en_2userver_2logging.html", null ],
        [ "Guide on TaskProcessor Usage", "db/d90/md_en_2userver_2task__processors__guide.html", null ],
        [ "Periodics and DistLocks", "d7/dc4/md_en_2userver_2periodics.html", null ]
      ] ],
      [ "Testing and Benchmarking", "de/d6a/md_en_2index.html", [
        [ "Unit Tests and Benchmarks", "d4/d70/md_en_2userver_2testing.html", null ],
        [ "Functional service tests (testsuite)", "df/d07/md_en_2userver_2functional__testing.html", null ],
        [ "Chaos Testing", "de/d74/md_en_2userver_2chaos__testing.html", null ],
        [ "Profiling context switches", "db/d8f/md_en_2userver_2profile__context__switches.html", null ]
      ] ],
      [ "Protocols", "de/d6a/md_en_2index.html", [
        [ "gRPC", "d1/d06/md_en_2userver_2grpc.html", null ],
        [ "HTTP", "de/d6a/md_en_2index.html", [
          [ "Client", "d5/dee/classclients_1_1http_1_1Client.html", null ],
          [ "HTTP Server", "df/d94/md_en_2userver_2http__server.html", null ]
        ] ],
        [ "RabbitMQ (AMQP 0-9-1) - EXPERIMENTAL", "dd/de2/rabbitmq_driver.html", null ],
        [ "Low level", "de/d6a/md_en_2index.html", [
          [ "TLS client and server socket", "df/d00/classengine_1_1io_1_1TlsWrapper.html", null ],
          [ "TCP and UDP sockets", "dd/dcf/classengine_1_1io_1_1Socket.html", null ],
          [ "Subprocesses", "d9/d4f/classengine_1_1subprocess_1_1ProcessStarter.html", null ]
        ] ]
      ] ],
      [ "Runtime service features", "de/d6a/md_en_2index.html", [
        [ "Dynamic configs", "de/d10/md_en_2schemas_2dynamic__configs.html", null ],
        [ "Changing the log level at runtime", "d1/de2/md_en_2userver_2log__level__running__service.html", null ],
        [ "Inspecting in-flight requests", "d8/d7b/md_en_2userver_2requests__in__flight.html", null ],
        [ "Service Statistics and Metrics (Prometheus/Graphite/...)", "d9/dac/md_en_2userver_2service__monitor.html", null ],
        [ "Memory profiling a production service", "d4/d1a/md_en_2userver_2memory__profile__running__service.html", null ],
        [ "Controlling DNS", "dc/d72/md_en_2userver_2dns__control.html", null ],
        [ "Handling OS signals", "df/d4e/md_en_2userver_2os__signals.html", null ],
        [ "Deadline Propagation", "d6/d64/md_en_2userver_2deadline__propagation.html", null ]
      ] ],
      [ "Caches", "de/d6a/md_en_2index.html", [
        [ "Basics of Caches", "d5/d2d/md_en_2userver_2caches.html", null ],
        [ "Local cache dumps", "da/dd6/md_en_2userver_2cache__dumps.html", null ],
        [ "Caching Component for PostgreSQL", "d9/dde/pg_cache.html", null ],
        [ "Least Recently Used (LRU) Caches and expirable LRU caches", "d0/dd8/md_en_2userver_2lru__cache.html", null ]
      ] ],
      [ "PostgreSQL", "de/d6a/md_en_2index.html", [
        [ "uPg Driver", "de/de0/pg_driver.html", null ],
        [ "uPg: Transactions", "db/dd8/pg_transactions.html", null ],
        [ "uPg: Running queries", "da/d1c/pg_run_queries.html", null ],
        [ "uPg: Working with result sets", "db/db5/pg_process_results.html", null ],
        [ "uPg: Supported data types", "d0/d89/pg_types.html", null ],
        [ "uPg: Typed PostgreSQL results", "d2/d2f/pg_user_row_types.html", null ],
        [ "uPg: Postgres errors", "d5/d8e/pg_errors.html", null ],
        [ "uPg: Cluster topology discovery", "da/d75/pg_topology.html", null ],
        [ "uPg: Mapping a C++ type to PostgreSQL user type", "d1/dda/pg_user_types.html", [
          [ "uPg: Composite user types", "d2/d9e/pg_composite_types.html", null ],
          [ "uPg: Mapping a C++ enum to PostgreSQL enum type.", "de/da8/pg_enum.html", null ],
          [ "uPg: Range types", "d5/d7e/pg_range_types.html", null ],
          [ "uPg: Arrays", "d9/d2d/pg_arrays.html", null ],
          [ "uPg bytea support", "da/d9e/pg_bytea.html", null ]
        ] ]
      ] ],
      [ "MySQL", "de/d6a/md_en_2index.html", [
        [ "MySQL Driver - EXPERIMENTAL", "db/d3d/mysql_driver.html", null ],
        [ "MySQL supported types", "d2/d0a/md_en_2userver_2mysql_2supported__types.html", null ],
        [ "MySQL driver design and implementation details", "dd/d32/md_en_2userver_2mysql_2design__and__details.html", null ]
      ] ],
      [ "Non relational databases", "de/d6a/md_en_2index.html", [
        [ "MongoDB", "d7/d65/md_en_2userver_2mongodb.html", null ],
        [ "Redis", "dd/dde/md_en_2userver_2redis.html", null ],
        [ "ClickHouse Driver", "dd/ddb/clickhouse_driver.html", null ]
      ] ],
      [ "Opensource", "de/d6a/md_en_2index.html", [
        [ "API and ABI stability, versioning", "db/d57/md_en_2userver_2development_2stability.html", null ],
        [ "Driver Writing Guide", "de/ddb/md_en_2userver_2driver__guide.html", null ],
        [ "Publications and Videos", "dc/d30/md_en_2userver_2publications.html", null ],
        [ "Notice to external contributors", "d4/dd9/md__2data_2code_2service__template_2third__party_2userver_2CONTRIBUTING.html", null ],
        [ "Security Policy", "d6/d2d/md__2data_2code_2service__template_2third__party_2userver_2SECURITY.html", null ],
        [ "Security Changelog", "db/dde/md_en_2userver_2security__changelog.html", null ],
        [ "Distributed under Apache-2.0 License", "^http://www.apache.org/licenses/LICENSE-2.0", null ],
        [ "Third Party Code Licenses", "db/d7c/md__2data_2code_2service__template_2third__party_2userver_2THIRD__PARTY.html", null ]
      ] ]
    ] ],
    [ "API Groups", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", "namespaces" ],
    [ "Reference", "usergroup0.html", [
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ],
      [ "Class List", "annotated.html", "annotated" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ],
      [ "File List", "files.html", "files" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d6f/http__status_8hpp.html#a2bfd82052ce780ec23a3a0d95e5df2c9ae69fa9a656f76dd8a4d89f21992b2d3a",
"d1/d08/classstorages_1_1mysql_1_1Cluster.html#ac85a1c3b902fb7106f908c59d86b0fd3",
"d1/d82/cluster__types_8hpp.html#a112991762e57633e6213c2cbbce7d62fad4720c3695455d7cf5bce1b2c7bcecdf",
"d1/db5/namespaceformats_1_1yaml_1_1blocking.html#aca1077a67907a72aba1621bc04e392d0",
"d2/d2a/serialize__duration_8hpp.html",
"d2/d79/namespacestorages_1_1postgres_1_1io.html#a6f677476b0746bd7c8e3e440a797e082aee669fa7b5a35d96a396d4ed648afb45",
"d2/dc6/io_8hpp_source.html",
"d3/d51/structstorages_1_1postgres_1_1io_1_1ArrayType_3_01PredefinedOids_1_1kDateRange_01_4.html",
"d3/dc1/wait__connected__mode_8hpp_source.html",
"d4/d4f/grpc_2include_2userver_2ugrpc_2server_2middlewares_2base_8hpp_source.html",
"d4/deb/span__builder_8hpp_source.html",
"d5/d4b/classengine_1_1TaskBase.html#adb71baede3971e9661b52e64fe17479b",
"d5/da0/classfs_1_1blocking_1_1CFile.html#a9cbe7e04e6c01d479dd545376a20416f",
"d6/d2f/namespacestorages_1_1clickhouse_1_1io_1_1columns.html#a8827a8b706421f5cb2551bd4b71815c1",
"d6/d84/namespaceutils.html",
"d6/dcf/structengine_1_1SingleConsumerEvent_1_1NoAutoReset.html",
"d7/d42/classstorages_1_1postgres_1_1QueryCancelled.html",
"d7/df2/classstorages_1_1mysql_1_1MappedStatementResultSet.html",
"d8/d37/structformats_1_1json_1_1ValueBuilder_1_1IterTraits.html",
"d8/d77/sql__state_8hpp.html#a93029bf118436c93545ac7e734ed2658a15a45023563408d7b72fd701cb430eb4",
"d8/d77/sql__state_8hpp.html#a93029bf118436c93545ac7e734ed2658aec0da41f4e48b52c362303eb27ed5dee",
"d8/def/decimal__binder_8hpp_source.html",
"d9/d56/inherited__variable_8hpp_source.html",
"d9/de3/classformats_1_1yaml_1_1ValueBuilder.html#a07cc8a58044904b6f0c5833ea8609451",
"da/d58/structstorages_1_1postgres_1_1io_1_1BufferParser_3_01Date_01_4.html",
"da/dc1/classformats_1_1yaml_1_1Value.html#a407524eb454f0938b24094325bdadd22",
"db/d1b/clickhouse_2include_2userver_2storages_2clickhouse_2execution__result_8hpp_source.html",
"db/d9d/classdist__lock_1_1DistLockedTask.html#a89c736c138f5a3fbcea9f141473e7506",
"db/dfb/universal_2include_2userver_2logging_2fwd_8hpp_source.html",
"dc/d4a/classstorages_1_1redis_1_1Request.html",
"dc/dc6/structstorages_1_1postgres_1_1io_1_1ArrayType_3_01PredefinedOids_1_1kChar_01_4.html",
"dd/d4a/dsn_8hpp.html#a6ab49fcd760262812658ef881fae3a1f",
"dd/dcf/classengine_1_1io_1_1Socket.html",
"de/d10/universal_2include_2userver_2formats_2parse_2common__containers_8hpp.html",
"de/d6d/namespacestorages_1_1postgres.html#a58ea081a583e7a99c69b05965787d6a6af3cc22042f9d8262e9f9ae6d5089cdfa",
"de/d6d/namespacestorages_1_1postgres.html#a93029bf118436c93545ac7e734ed2658acb9fa2272eadc020690806a7e4842042",
"de/d91/classformats_1_1json_1_1Value.html#a93e4798703dc3a47b60f1450f13a4974",
"de/df5/classclients_1_1http_1_1Request.html#a4e9d1de046040c468268f530e7b1acb2",
"df/d69/classstorages_1_1redis_1_1RequestEval.html",
"dir_3285f5f33091c25af669261537588667.html",
"namespacemembers_type.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';