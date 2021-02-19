import React, { useEffect, useRef } from "react";
import {
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  withStyles,
} from "@material-ui/core";
import {
  ArrowDropDown as ArrowDropDownIcon,
  AccountCircle as AccountCircleIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.default.main
  },
});

function DropDownMenu({ menu, subMenu, userMenu, classes }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >
        {userMenu && <AccountCircleIcon />}
        {menu}
        <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {subMenu.map(({ name, link, handleClick }, index) =>
                    userMenu ? (
                      <MenuItem
                        key={index}
                        component={Button}
                        onClick={handleClick}
                      >
                        {name}
                      </MenuItem>
                    ) : (
                        <MenuItem key={index} component={Link} to={link}>
                          {name}
                        </MenuItem>
                      )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default withStyles(styles)(DropDownMenu);
