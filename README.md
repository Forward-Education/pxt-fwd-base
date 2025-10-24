# The Base Extension

The purpose of this repo is to host dependencies of modules in pxt-fwd-modules. It's easier to manage versioning when you avoid having a module be dependent on something in the same repo. Refer to README.md in pxt-forward-modules for a full breakdown of the Forward Education extension ecosystem.

Nothing in this repo should have blocks. It's all behind the scenes.

## Updating Jacdac

You update the pxt-jacdac version in this extension. Remember to do it for all the pxt-jacdac dependencies in this repo. For example you need to update pxt-jacdac and pxt-jacdac/servo for fwd-servo-base. Using VS Code search and replace is a good way to check for this.

## The Servo Situation

Positional and continuous servos must use the same clients. To allow the independent inclusion of positional and continuous servo blocks, the servo clients and their functionality are defined in the base and the blocks are provided in pxt-fwd-modules through fwd-servo-continuous and fwd-servo-positional modules.
