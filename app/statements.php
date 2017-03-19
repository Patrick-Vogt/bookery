<?php
  $statements = array (
    'emailcheck'         =>       'SELECT * FROM vt_member WHERE email=?',
    'login'                   =>       'SELECT a.userid, d.channelname AS channel,
                                            c.roleid, b.email,
                                            a.password,
                                            TIMESTAMPDIFF(DAY,date_format(now(),"%Y-%m-%d"),a.expired_to) as expired
                                            FROM vt_login a
                                            INNER JOIN vt_member b on b.userid=a.userid and b.email=?
                                            INNER JOIN vt_role c on c.roleid=a.roleid
                                            INNER JOIN vt_channellist d on d.channelid=b.channel
                                            WHERE a.active=?',
     'loginupdate'      =>       'Update vt_login
                                            set userip=?,
                                            userinfo=?,
                                            lastused=now(),
                                            loggedin = ?
                                            where userid=(select userid from vt_member where UPPER(email)=UPPER(?))
                                            and active=?
                                            LIMIT 1',
    'loginrefresh'       =>       'Update vt_login
                                            set lastused=now()
                                            where userid=(select userid from vt_member where UPPER(email)=UPPER(?))
                                            and active=?
                                            LIMIT 1',
    'loginstatus'         =>      'SELECT userip,
                                            userinfo,
                                            loginaccess,
                                            UNIX_TIMESTAMP(lastused) as lastused
      		                               FROM vt_login
      			                         WHERE userid =(select userid from vt_member where UPPER(email)=UPPER(?))
                                            and active=?',
    'loginaccess'        =>       'select a.modulename,
                                            b.applicationname,
                                            b.roleaccess as applicationrole,
                                            b.useraccess as applicationuser,
                                            actionname,
                                            c.roleaccess as actionrole,
                                            c.useraccess as ationuser
                                            from vt_module a
                                            left join vt_application b on b.moduleid=a.moduleid
                                            and b.active=?
                                            and  (   b.roleaccess like UPPER(CONCAT("%",?,"%"))
                                                 or b.useraccess like UPPER(CONCAT("%",?,"%"))
                                                )
                                            left join vt_actions c on c.applicationid=b.applicationid
                                            and c.active=?
                                            and  (   c.roleaccess like UPPER(CONCAT("%",?,"%"))
                                                 or c.useraccess like  UPPER(CONCAT("%",?,"%"))
                                                )
                                            where a.active=?
                                            and (   a.roleaccess like UPPER(CONCAT("%",?,"%"))
                                            or a.useraccess like UPPER(CONCAT("%",?,"%"))
                                            )',
    'attempts'            =>      'SELECT * FROM vt_attempts WHERE IP=? OR email=?',
    'attemptsip'         =>      'SELECT * FROM vt_attempts WHERE IP=?',
    'loginerrinst'        =>      'INSERT INTO vt_attempts(IP,email,attempt) VALUES(?, ?, ?)',
    'loginerrupd'        =>      'UPDATE vt_attempts  set attempt=? WHERE IP=? OR email=?',
    'rolelist'                =>      'SELECT * from vt_role',
    'registerlogin'      =>       'INSERT INTO vt_login (roleid, created_hash, register_salt, register_to, expired_to)
                                             VALUES (?, ?, ?, ?, ?)',
    'registermember'      => 'INSERT INTO vt_member (userid, email, firstname, lastname, language, channel)
                                            VALUES (?, ?, ?, ?, ?, ?)',
    'registernew'         => 'Select a.userid,b.channelid, b.channelname
                                            from vt_login a,
                                                     vt_channellist b
                                             where a.created_hash=?
                                                         and a.active=?
                                                         and b.isused = ?
                                                         Limit 1;',
       'registeradmin'         => 'Select userid
                                            from vt_login
                                             where created_hash=?
                                                         and active=?',
       'channelupdate'          => 'UPDATE vt_channellist
                                                   set isused =?
                                                   where channelid=?',

    'registersalt'          => 'Select register_salt from vt_login where userid=? and active=?',
    'checkregister'       => 'Select a.userid,
                                                    case ifnull(a.created_hash,"")
                                                        when "" then "noval"
                                                        else a.created_hash
                                                    end created_hash,
                                                    a.active,
                                     case ifnull(a.register_to,"")
                                       when "0000-00-00" then "wrongFormat"
                                       else TIMESTAMPDIFF(DAY,date_format(now(),"%Y-%m-%d"),a.register_to)
                                     end diffday,
                                     b.email,
                                     concat(b.firstname," ",b.lastname) as username
                                FROM vt_login a
                                INNER JOIN vt_member b on b.userid=a.userid and b.email=?',
    'checkemail'          => 'Select userid
                                from vt_member
                               where email=?',
    'activateregister'    => 'UPDATE vt_login
                                 set password=?,
                                     created_hash=?,
                                     register_to=?,
                                     active=?
                               WHERE userid=?
                                 AND active=?',
    'registerstatus'      => 'SELECT *
                               from vt_login a
                              INNER JOIN vt_member b on b.userid=a.userid and b.email=?
                               WHERE a.userid=?
                                 AND a.password=?
                                 AND a.active=?',
    'participant_connect' => 'select connect_status
                                from connect
                               where connect_as=?
                                 and connect_sessionid=?
                                 and active =?',
    'addTransmission'     => 'INSERT INTO vt_transmissions
                                (expertid,
                                expertisenumber,
                                transmissionwith,
                                appointment,
                                notes, status, roomid, customermail, customermobile)
                              VALUES
                                (?,
                                ?,
                                ?,
                                ?,
                                ?, ?,?,?,?)',
    'getOpenTransmissions'=> 'SELECT
                              expertisenumber,
                              transmissionwith,
                              appointment,
                              notes
                              FROM vt_transmissions
                              WHERE expertid IS NULL OR expertid ="" ORDER BY appointment',
    'getMyTransmissions'=>    'SELECT
                              expertisenumber,
                              transmissionwith,
                              appointment,
                              notes, status
                              FROM vt_transmissions
                              WHERE expertid = ? AND status = ? ORDER BY appointment',
    'updateOpenTransmissions'=> 'UPDATE
                                vt_transmissions
                                SET expertid = ?,
                                roomid = ?
                                WHERE expertisenumber = ?',
      'completeTransmission'=> 'UPDATE
                                vt_transmissions
                                SET status = "abgeschlossen"
                                WHERE expertisenumber = ?',
       'reopenTransmission'=> 'UPDATE
                                vt_transmissions
                                SET status = "ausstehend"
                                WHERE expertisenumber = ?',
      'checkSignin' =>          'SELECT  expertisenumber,
                                                         expertid,
                                                         transmissionwith,
                                                         roomid
                                from vt_transmissions
                                WHERE transmissionwith = ? AND roomid = ? AND status=?',
       'lockRegister' =>         'UPDATE vt_login
                                set active = ?
                                WHERE userid = (SELECT userid FROM vt_member WHERE email = ?)',
      'loggedin' =>    'SELECT count(*) AS Records FROM vt_login
                                WHERE loggedin = ? AND userid = ?',
      'userlogout' =>    'UPDATE vt_login
                                set loggedin = ?
                                WHERE userid = ?',
      'setgallerypath' =>    'INSERT INTO vt_gallerypath
                               (expertisenumber, imagepath)
                                VALUES (?,?)',
       'checkgallerypath' =>    'SELECT * from vt_gallerypath
                               WHERE expertisenumber = ?',
       'updateimagecount' =>    'UPDATE vt_gallerypath
                              set saved_images = saved_images +1 WHERE expertisenumber = ?',

  )
?>
