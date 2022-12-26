import NodeMailerServer from 'node-media-server'

const config = {
    rtmp: {
      port: 1937,
      chunk_size: 600,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8002,
      allow_origin: '*'
    }
  };

const nms = new NodeMailerServer(config)
nms.run();
