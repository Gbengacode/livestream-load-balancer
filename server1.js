import NodeMailerServer from 'node-media-server'

const config = {
    rtmp: {
      port: 1935,
      chunk_size: 600,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8000,
      allow_origin: '*'
    },
    relay: {
      ffmpeg: '/usr/bin/ffmpeg',
      tasks: [
        {
          app: 'live',
          mode: 'push',
          edge: 'rtmp://localhost:1936',
        },
        {
          app: 'live',
          mode: 'push',
          edge: 'rtmp://localhost:1936',
        }
      ]
    }
  };

const nms = new NodeMailerServer(config)
nms.run();
